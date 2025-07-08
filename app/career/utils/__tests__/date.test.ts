import { describe, expect, it } from 'vitest';
import { formatDate, formatDateRange, formatDateRangeForDisplay } from '@/career/utils/date';

describe('Date Utils', () => {
  describe('formatDateRange', () => {
    it('should format date range with both dates', () => {
      const result = formatDateRange('2023-01', '2024-12');
      expect(result).toEqual({ start: '2023-01', end: '2024-12' });
    });

    it('should handle empty end date', () => {
      const result = formatDateRange('2023-01', '');
      expect(result).toEqual({ start: '2023-01', end: 'Present' });
    });

    it('should handle empty start date', () => {
      const result = formatDateRange('', '2024-12');
      expect(result).toEqual({ start: 'Unknown', end: '2024-12' });
    });
  });

  describe('formatDate', () => {
    it('should format date in YYYY-MM format', () => {
      const result = formatDate('2023-01');
      expect(result).toBe('Jan 2023');
    });

    it('should handle Present date', () => {
      const result = formatDate('Present');
      expect(result).toBe('Present');
    });

    it('should format December correctly', () => {
      const result = formatDate('2023-12');
      expect(result).toBe('Dec 2023');
    });
  });

  describe('formatDateRangeForDisplay', () => {
    it('should format complete date range for display', () => {
      const dateRange = { start: '2023-01', end: '2024-12' };
      const result = formatDateRangeForDisplay(dateRange);
      expect(result).toBe('Jan 2023 - Dec 2024');
    });

    it('should handle Present end date', () => {
      const dateRange = { start: '2023-01', end: 'Present' };
      const result = formatDateRangeForDisplay(dateRange);
      expect(result).toBe('Jan 2023 - Present');
    });
  });
});
