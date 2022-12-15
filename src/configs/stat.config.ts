import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  registrantsApi: string
  projectsApi: string
  fileApi: string
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
    fileApi: 'https://stat.sentre.io/codingcamp/get-typeform-file',
  },

  /**
   * Staging configurations
   */
  staging: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
    fileApi: 'https://stat.sentre.io/codingcamp/get-typeform-file',
  },

  /**
   * Production configurations
   */
  production: {
    registrantsApi: 'https://stat.sentre.io/codingcamp/total-registers',
    projectsApi: 'https://stat.sentre.io/codingcamp/submission',
    fileApi: 'https://stat.sentre.io/codingcamp/get-typeform-file',
  },
}

/**
 * Module exports
 */
export default configs
