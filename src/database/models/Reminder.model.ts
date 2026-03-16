export interface Reminder {
  id: string;
  title: string;
  description?: string;
  category: 'health' | 'documents' | 'household' | 'custom';
  createdAt: number;
  updatedAt: number;
  dueDate?: number;
  completed: boolean;
  completedAt?: number;
  alarmId?: string;
  noteId?: string;
  repeatPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'none';
  customRepeatDays?: number[];
}

export class ReminderModel {
  static tableName = 'reminders';

  static async create(reminder: Omit<Reminder, 'id' | 'createdAt' | 'updatedAt'>): Promise<Reminder> {
    // Будет реализовано с SQLite
    const now = Date.now();
    const newReminder: Reminder = {
      ...reminder,
      id: Math.random().toString(36).substring(7),
      createdAt: now,
      updatedAt: now,
    };
    return newReminder;
  }

  static async findById(id: string): Promise<Reminder | null> {
    // Будет реализовано
    return null;
  }

  static async update(id: string, data: Partial<Reminder>): Promise<Reminder | null> {
    // Будет реализовано
    return null;
  }

  static async delete(id: string): Promise<boolean> {
    // Будет реализовано
    return true;
  }

  static async getDueReminders(): Promise<Reminder[]> {
    // Будет реализовано
    return [];
  }
}
