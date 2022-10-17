import { Env } from './env'

/**
 * Contructor
 */

type Config = {
  cluster: string
  campaign: string
}

const configs: Record<Env, Config> = {
  /**
   * Development configurations
   */
  development: {
    cluster: 'https://devnet.genesysgo.net',
    campaign: 'Vietnam Solana Coding Camp - Season 2',
  },

  /**
   * Staging configurations
   */
  staging: {
    cluster: 'https://api.devnet.solana.com',
    campaign: 'Vietnam Solana Coding Camp - Season 2',
  },

  /**
   * Production configurations
   */
  production: {
    cluster:
      'https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/',
    campaign: 'Vietnam Solana Coding Camp - Season 2',
  },
}

/**
 * Module exports
 */
export default configs
