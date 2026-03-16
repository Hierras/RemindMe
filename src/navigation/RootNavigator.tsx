import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types/navigation.types';

// Здесь будут импорты экранов
// import { HomeScreen } from '@modules/home';
// import { RemindersScreen } from '@modules/reminders';
// import { AlarmScreen } from '@modules/alarm';
// import { NotesScreen } from '@modules/notes';
// import { PlannerScreen } from '@modules/planner';
// import { StatisticsScreen } from '@modules/statistics';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'CheckUp' }}
        />
        <Stack.Screen 
          name="Reminders" 
          component={RemindersScreen} 
          options={{ title: 'Напоминания' }}
        />
        <Stack.Screen 
          name="Alarm" 
          component={AlarmScreen} 
          options={{ title: 'Будильник' }}
        />
        <Stack.Screen 
          name="Notes" 
          component={NotesScreen} 
          options={{ title: 'Заметки' }}
        />
        <Stack.Screen 
          name="Planner" 
          component={PlannerScreen} 
          options={{ title: 'План на день' }}
        />
        <Stack.Screen 
          name="Statistics" 
          component={StatisticsScreen} 
          options={{ title: 'Статистика' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Временные заглушки для экранов (чтобы не было ошибок)
const HomeScreen = () => null;
const RemindersScreen = () => null;
const AlarmScreen = () => null;
const NotesScreen = () => null;
const PlannerScreen = () => null;
const StatisticsScreen = () => null;
