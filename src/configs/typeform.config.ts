import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  registration: string
  submission: string
  luma: 'https://lu.ma/solaward'
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    registration: 'hmRimcc6',
    submission: 'fh8YQG90',
    luma: 'https://lu.ma/solaward',
  },

  /**
   * Staging configurations
   */
  staging: {
    registration: 'hmRimcc6',
    submission: 'fh8YQG90',
    luma: 'https://lu.ma/solaward',
  },

  /**
   * Production configurations
   */
  production: {
    registration: 'hmRimcc6',
    submission: 'fh8YQG90',
    luma: 'https://lu.ma/solaward',
  },
}

/**
 * Module exports
 */
export default configs
