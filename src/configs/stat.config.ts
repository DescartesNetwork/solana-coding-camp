import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  registrants: string
  projects: string
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    registrants: 'https://stat.sentre.io/codingcamp/total-registers',
    projects: 'https://stat.sentre.io/codingcamp/submission',
  },

  /**
   * Staging configurations
   */
  staging: {
    registrants: 'https://stat.sentre.io/codingcamp/total-registers',
    projects: 'https://stat.sentre.io/codingcamp/submission',
  },

  /**
   * Production configurations
   */
  production: {
    registrants: 'https://stat.sentre.io/codingcamp/total-registers',
    projects: 'https://stat.sentre.io/codingcamp/submission',
  },
}

/**
 * Module exports
 */
export default configs
