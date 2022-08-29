import { Route, Switch } from 'react-router-dom'

import Home from './home'
import { Layout } from 'antd'

import Watcher from './watcher'

import 'swiper/css/bundle'
import 'static/styles/theme.less'
import './index.less'

const View = () => {
  return (
    <Layout style={{ background: 'transparent', overflow: 'hidden' }}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Watcher />
    </Layout>
  )
}

export default View
