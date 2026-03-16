import { AndroidAudioContentType, AndroidAudioUsage, AndroidNotificationVisibility, NotificationChannel } from 'expo-notifications';

export const NotificationChannels: Record<string, NotificationChannel> = {
  REMINDERS: {
    id: 'reminders',
    name: 'Напоминания',
    importance: 4, // IMPORTANCE_HIGH
    sound: 'custom',
    bypassDnd: false,
    description: 'Уведомления о напоминаниях',
    enableLights: true,
    enableVibrate: true,
    lightColor: '',
    lockscreenVisibility: AndroidNotificationVisibility.PUBLIC,
    showBadge: true, 
    audioAttributes: {
      usage: AndroidAudioUsage.ALARM,
      contentType: AndroidAudioContentType.MUSIC,
      flags: {
        enforceAudibility: false,
        requestHardwareAudioVideoSynchronization: false,
      }
    }, 
    vibrationPattern: null
  },
  ALARMS: {
    id: 'alarms',
    name: 'Будильники',
    importance: 5, // IMPORTANCE_MAX
    sound: 'custom',
    bypassDnd: true,
    description: 'Звук будильника',
    enableLights: true,
    enableVibrate: true,
    lightColor: '',
    lockscreenVisibility: AndroidNotificationVisibility.PUBLIC,
    showBadge: true, 
    audioAttributes: {
      usage: AndroidAudioUsage.ALARM,
      contentType: AndroidAudioContentType.MUSIC,
      flags: {
        enforceAudibility: false,
        requestHardwareAudioVideoSynchronization: false,
      }
    }, 
    vibrationPattern: null
  },
  DAILY_PLAN: {
    id: 'daily_plan',
    name: 'План на день',
    importance: 3, // IMPORTANCE_DEFAULT
    sound: 'custom',
    bypassDnd: false,
    description: 'Уведомления о планах на день',
    enableLights: true,
    enableVibrate: true,
    lightColor: '',
    lockscreenVisibility: AndroidNotificationVisibility.PUBLIC,
    showBadge: true, 
    audioAttributes: {
      usage: AndroidAudioUsage.ALARM,
      contentType: AndroidAudioContentType.MUSIC,
      flags: {
        enforceAudibility: false,
        requestHardwareAudioVideoSynchronization: false,
      }
    }, 
    vibrationPattern: null
  },
};
