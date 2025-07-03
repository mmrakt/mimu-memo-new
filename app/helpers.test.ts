import { describe, it, expect } from 'vitest'

// Simple utility functions to test
export function formatDate(date: string): string {
  return date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

describe('Helper Functions', () => {
  describe('formatDate', () => {
    it('formats date from YYYY-MM-DD to DD/MM/YYYY', () => {
      expect(formatDate('2023-12-25')).toBe('25/12/2023')
    })

    it('handles single digit days and months', () => {
      expect(formatDate('2023-01-05')).toBe('05/01/2023')
    })
  })

  describe('slugify', () => {
    it('converts text to lowercase slug', () => {
      expect(slugify('Hello World')).toBe('hello-world')
    })

    it('removes special characters', () => {
      expect(slugify('Hello, World!')).toBe('hello-world')
    })

    it('handles multiple spaces', () => {
      expect(slugify('Hello   World')).toBe('hello-world')
    })

    it('removes leading and trailing dashes', () => {
      expect(slugify('!Hello World!')).toBe('hello-world')
    })
  })

  describe('truncateText', () => {
    it('returns original text if shorter than max length', () => {
      expect(truncateText('Hello', 10)).toBe('Hello')
    })

    it('truncates text and adds ellipsis', () => {
      expect(truncateText('Hello World', 8)).toBe('Hello Wo...')
    })

    it('handles exact length', () => {
      expect(truncateText('Hello', 5)).toBe('Hello')
    })
  })

  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('test@example')).toBe(false)
    })
  })
})