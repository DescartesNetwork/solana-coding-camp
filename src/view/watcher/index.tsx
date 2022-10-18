import { Fragment } from 'react'

import BallotWatcher from './ballot.watcher'
import UIWatcher from './ui.watcher'

const Watcher = () => {
  return (
    <Fragment>
      <UIWatcher />
      <BallotWatcher />
    </Fragment>
  )
}

export default Watcher
