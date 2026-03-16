import { format, formatDistance, isToday, isTomorrow, isYesterday, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date | number, formatStr: string = 'dd.MM.yyyy'): string => {
  return format(date, formatStr, { locale: ru });
};

export const formatTime = (date: Date | number, formatStr: string = 'HH:mm'): string => {
  return format(date, formatStr, { locale: ru });
};

export const getRelativeDay = (date: Date | number): string => {
  if (isToday(date)) return 'Сегодня';
  if (isTomorrow(date)) return 'Завтра';
  if (isYesterday(date)) return 'Вчера';
  return formatDate(date);
};

export const formatTimeRemaining = (date: Date | number): string => {
  return formatDistance(date, new Date(), { 
    locale: ru,
    addSuffix: true 
  });
};

export const getWeekDays = (): { full: string; short: string }[] => {
  return [
    { full: 'Воскресенье', short: 'Вс' },
    { full: 'Понедельник', short: 'Пн' },
    { full: 'Вторник', short: 'Вт' },
    { full: 'Среда', short: 'Ср' },
    { full: 'Четверг', short: 'Чт' },
    { full: 'Пятница', short: 'Пт' },
    { full: 'Суббота', short: 'Сб' },
  ];
};
