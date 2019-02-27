import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import rootReducer from './modules/reducer'

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  // Don't need history for now until we put a Router in
  // const history = createBrowserHistory()
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return { store }
}
