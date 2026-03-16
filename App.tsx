import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from '@navigation/RootNavigator';
import { ThemeProvider } from '@shared/contexts/ThemeContext';
import { SettingsProvider } from '@shared/contexts/SettingsContext';
import { initDatabase } from '@database/adapter';
import { requestPermissions } from '@core/utils/permissionUtils';
import { setupNotificationChannels } from '@core/utils/notificationUtils';

export default function App() {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Инициализация базы данных
        await initDatabase();
        
        // Настройка каналов уведомлений для Android
        await setupNotificationChannels();
        
        // Запрос необходимых разрешений
        await requestPermissions();
        
        console.log('App initialized successfully');
      } catch (error) {
        console.error('Failed to initialize app:', error);
      }
    };

    initializeApp();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SettingsProvider>
          <RootNavigator />
          <StatusBar style="auto" />
        </SettingsProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
