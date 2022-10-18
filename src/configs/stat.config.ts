import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  registrantsApi: string
  projectsApi: string
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
  },

  /**
   * Staging configurations
   */
  staging: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
  },

  /**
   * Production configurations
   */
  production: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
  },
}

/**
 * Module exports
 */
export default configs
