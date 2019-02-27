import * as React from 'react'
import { Provider } from 'react-redux'

import styled from 'styled-components'

const FullHeight = styled.div`
  height: 100%;
`

interface Props {
  store: any
  children?: any
}

const Root = ({ store, children }: Props) => (
  <Provider store={store} key="provider">
    <FullHeight>{children}</FullHeight>
  </Provider>
)

export default Root
