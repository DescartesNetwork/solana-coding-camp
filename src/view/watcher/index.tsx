import { Fragment } from 'react'

import BallotWatcher from './ballot.watcher'
import BlogsWatcher from './blogs.watcher'
import UIWatcher from './ui.watcher'

const Watcher = () => {
  return (
    <Fragment>
      <UIWatcher />
      <BallotWatcher />
      <BlogsWatcher />
    </Fragment>
  )
}

export default Watcher
