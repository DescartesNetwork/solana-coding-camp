import env from './env'
import voting from './voting.config'
import typeform from './typeform.config'

const configs = {
  env,
  voting: voting[env],
  typeform: typeform[env],
}

/**
 * Module exports
 */
export default configs
