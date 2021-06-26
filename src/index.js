import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RootStoreProvider } from './store/RootStore/RootStoreContext'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
