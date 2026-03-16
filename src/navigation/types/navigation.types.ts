export type RootStackParamList = {
  Home: undefined;
  Reminders: { category?: string } | undefined;
  Alarm: { reminderId?: string; taskId?: string } | undefined;
  Notes: { noteId?: string; reminderId?: string } | undefined;
  Planner: { date?: string } | undefined;
  Statistics: { period?: 'week' | 'month' | 'year' } | undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  RemindersTab: undefined;
  PlannerTab: undefined;
  StatisticsTab: undefined;
};
