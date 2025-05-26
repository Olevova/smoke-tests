export const URLS = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  COMPANY_DASHBOARD: (id: number) => `company/${id}/dashboard`,
  USER_DASHBOARD: (id: number) => `user/${id}/dashboard`,
  // PROJECT_COLORBOARD: (id: number) => `company/${id}/projects`,
} 

export const TIMEOUTS = {
  DEFAULT: 5000,
  LONG: 10000,
  SHORT: 1000,
} 

export const SELECTORS = {
  FORMS: {
    COMPANY: 'app-company-form',
    PROJECT: 'app-project-form',
    COLOR_BOARD: 'app-board-form',
    USER_INVITE: 'app-invite-user-form',
    FORGOT_PASSWORD: 'app-forgot-password',
    TASK: 'app-task-form'
  },
}