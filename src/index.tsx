import * as React from 'react'
import * as ReactDOM from 'react-dom'
import configureStore from './redux/create-store'

import Root from './root'
import App from './app'

const { store } = configureStore()

ReactDOM.render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('app') as HTMLElement
)
