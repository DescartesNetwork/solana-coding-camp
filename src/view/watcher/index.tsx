import { Fragment } from 'react'

import BlogsWatcher from './blogs.watcher'
import UIWatcher from './ui.watcher'

const Watcher = () => {
  return (
    <Fragment>
      <UIWatcher />
      <BlogsWatcher />
    </Fragment>
  )
}

export default Watcher
