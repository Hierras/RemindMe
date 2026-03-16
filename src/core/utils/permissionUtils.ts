import * as MediaLibrary from 'expo-media-library';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

export const requestPermissions = async () => {
  const permissions = [];

  // Разрешения для медиатеки (выбор музыки для будильника)
  if (Platform.OS === 'android') {
    const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
    permissions.push({ type: 'media', status: mediaStatus });
  }

  // Разрешения для уведомлений
  const { status: notificationStatus } = await Notifications.requestPermissionsAsync();
  permissions.push({ type: 'notifications', status: notificationStatus });

  // Для Android 13+ нужно разрешение на точные будильники
  if (Platform.OS === 'android' && Platform.Version >= 33) {
    // Это разрешение запрашивается через Intent, его нельзя просто так запросить
    // Пользователю нужно будет перейти в настройки
    console.log('Need to request SCHEDULE_EXACT_ALARM permission');
  }

  return permissions;
};

export const checkPermissions = async () => {
  const mediaPermission = await MediaLibrary.getPermissionsAsync();
  const notificationPermission = await Notifications.getPermissionsAsync();

  return {
    media: mediaPermission.status === 'granted',
    notifications: notificationPermission.status === 'granted',
  };
};
