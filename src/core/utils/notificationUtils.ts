import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { NotificationChannels } from '@core/constants/NotificationChannels';

export const setupNotificationChannels = async () => {
  if (Platform.OS === 'android') {
    for (const channel of Object.values(NotificationChannels)) {
      await Notifications.setNotificationChannelAsync(channel.id, channel);
    }
  }
};

export const scheduleNotification = async (
  title: string,
  body: string,
  trigger: Notifications.NotificationTriggerInput,
  data?: any
) => {
  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data,
      sound: 'default',
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger,
  });
  return notificationId;
};

export const cancelNotification = async (notificationId: string) => {
  await Notifications.cancelScheduledNotificationAsync(notificationId);
};

export const cancelAllNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
