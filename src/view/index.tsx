import { Route, Switch } from 'react-router-dom'

import Home from './home'

import 'swiper/css/bundle'
import 'static/styles/theme.less'
import './index.less'

const View = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default View
