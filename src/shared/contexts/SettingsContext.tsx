import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys } from '@core/constants/StorageKeys';

interface Settings {
  notificationsEnabled: boolean;
  defaultAlarmVolume: number;
  defaultAlarmSound: string;
  vibrationEnabled: boolean;
  snoozeEnabled: boolean;
  snoozeDuration: number;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => Promise<void>;
  isLoading: boolean;
}

const defaultSettings: Settings = {
  notificationsEnabled: true,
  defaultAlarmVolume: 70,
  defaultAlarmSound: 'default',
  vibrationEnabled: true,
  snoozeEnabled: true,
  snoozeDuration: 5,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const loadedSettings: Partial<Settings> = {};
      
      for (const [key, value] of Object.entries(defaultSettings)) {
        const storedValue = await AsyncStorage.getItem(StorageKeys[key.toUpperCase() as keyof typeof StorageKeys]);
        if (storedValue !== null) {
          if (typeof value === 'number') {
            loadedSettings[key as keyof Settings] = Number(storedValue);
          } else if (typeof value === 'boolean') {
            loadedSettings[key as keyof Settings] = storedValue === 'true';
          } else {
            loadedSettings[key as keyof Settings] = storedValue as any;
          }
        }
      }

      setSettings({ ...defaultSettings, ...loadedSettings });
    } catch (error) {
      console.error('Failed to load settings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSettings = async (newSettings: Partial<Settings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);

    try {
      for (const [key, value] of Object.entries(newSettings)) {
        await AsyncStorage.setItem(
          StorageKeys[key.toUpperCase() as keyof typeof StorageKeys],
          String(value)
        );
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, isLoading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
