import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import View from 'view'

import store from 'store'

render(
  <Provider store={store}>
    <HashRouter>
      <View />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
