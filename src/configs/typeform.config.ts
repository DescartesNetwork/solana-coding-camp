import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  registration: string
  submission: string
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    registration: 'hyibBZhP',
    submission: 'fh8YQG90',
  },

  /**
   * Staging configurations
   */
  staging: {
    registration: 'hyibBZhP',
    submission: 'fh8YQG90',
  },

  /**
   * Production configurations
   */
  production: {
    registration: 'hyibBZhP',
    submission: 'fh8YQG90',
  },
}

/**
 * Module exports
 */
export default configs
