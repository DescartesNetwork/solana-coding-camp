import env from './env'
import voting from './voting.config'
import typeform from './typeform.config'
import stat from './stat.config'

const configs = {
  env,
  voting: voting[env],
  typeform: typeform[env],
  stat: stat[env],
}

/**
 * Module exports
 */
export default configs
