import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import View from 'view'

import store from 'store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <View />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
