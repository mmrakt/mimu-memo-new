import '@testing-library/jest-dom'

// Polyfill for global
if (typeof global === 'undefined') {
  // @ts-ignore
  globalThis.global = globalThis
}