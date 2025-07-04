import { CAREER_CONFIG } from '../config/constants';

export function formatDateRange(start: string, end: string): { start: string; end: string } {
  return {
    start: start || 'Unknown',
    end: end || 'Present',
  };
}

export function formatDate(date: string): string {
  if (date === 'Present') return 'Present';
  const [year, month] = date.split('-');
  return `${CAREER_CONFIG.MONTHS[parseInt(month) - 1]} ${year}`;
}

export function formatDateRangeForDisplay(dateRange: { start: string; end: string }): string {
  return `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`;
}
