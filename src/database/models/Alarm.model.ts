export interface Alarm {
  id: string;
  time: string; // HH:mm format
  enabled: boolean;
  soundUri?: string;
  soundName?: string;
  volume: number; // 0-100
  vibration: boolean;
  label?: string;
  repeatDays?: number[]; // 0-6, где 0 - воскресенье
  snoozeEnabled: boolean;
  snoozeDuration?: number; // минуты
  relatedReminderId?: string;
  relatedTaskId?: string;
  createdAt: number;
  updatedAt: number;
}

export class AlarmModel {
  static tableName = 'alarms';

  static async create(alarm: Omit<Alarm, 'id' | 'createdAt' | 'updatedAt'>): Promise<Alarm> {
    const now = Date.now();
    const newAlarm: Alarm = {
      ...alarm,
      id: Math.random().toString(36).substring(7),
      createdAt: now,
      updatedAt: now,
    };
    return newAlarm;
  }

  static async schedule(alarmId: string): Promise<boolean> {
    // Будет реализовано с нативным кодом
    return true;
  }

  static async cancel(alarmId: string): Promise<boolean> {
    // Будет реализовано
    return true;
  }

  static async getActiveAlarms(): Promise<Alarm[]> {
    // Будет реализовано
    return [];
  }
}
