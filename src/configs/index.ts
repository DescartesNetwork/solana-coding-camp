import env from './env'
import basics from './basics.config'
import typeform from './typeform.config'

const configs = {
  env,
  basics: basics[env],
  typeform: typeform[env],
}

/**
 * Module exports
 */
export default configs
