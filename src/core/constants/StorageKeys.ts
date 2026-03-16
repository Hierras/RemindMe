export const StorageKeys = {
  // Настройки
  THEME: '@checkup:theme',
  NOTIFICATIONS_ENABLED: '@checkup:notifications_enabled',
  DEFAULT_ALARM_VOLUME: '@checkup:default_alarm_volume',
  DEFAULT_ALARM_SOUND: '@checkup:default_alarm_sound',
  
  // Данные пользователя
  ONBOARDING_COMPLETED: '@checkup:onboarding_completed',
  USER_NAME: '@checkup:user_name',
  
  // Статистика
  STREAK_COUNT: '@checkup:streak_count',
  LAST_ACTIVE_DATE: '@checkup:last_active_date',
} as const;

export type StorageKey = keyof typeof StorageKeys;
