import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'store'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './home'
import { Layout } from 'antd'
import About from './about'

import Watcher from './watcher'

import 'swiper/css/bundle'
import 'static/styles/theme.less'
import './index.less'

const View = () => {
  const language = useSelector((state: AppState) => state.languages.language)
  useEffect(() => {
    const rootElm = document.getElementById('root')
    if (!rootElm) return

    rootElm.setAttribute('class', language)
  }, [language])

  return (
    <Layout style={{ background: 'transparent', overflow: 'hidden' }}>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="*">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Watcher />
    </Layout>
  )
}

export default View
