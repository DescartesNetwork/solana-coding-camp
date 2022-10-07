import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './home'
import { Layout } from 'antd'
import About from './about'

import Watcher from './watcher'

import 'swiper/css/bundle'
import 'static/styles/theme.less'
import './index.less'

const View = () => {
  return (
    <Layout style={{ background: 'transparent', overflow: 'hidden' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Watcher />
    </Layout>
  )
}

export default View
