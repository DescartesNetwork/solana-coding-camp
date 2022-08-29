/// <reference types="react-scripts" />

type AcademyNotification = {
  type: 'error' | 'warning' | 'success' | 'info'
  description: string
  onClick?: () => void
}
interface Window {
  // Utility
  notify: ({ type, description, onClick }: AcademyNotification) => void
}

/**
 * Declare namespace
 */
declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': any
  }
}

declare module '*.pdf'
