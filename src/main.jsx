import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes'
import { PlansProvider } from './context-api/context/plans-module'
import { initialAxios } from './server/initialAxios'

import './assets/styles/scss/main.scss'

initialAxios()

ReactDOM.createRoot(document.getElementById('root')).render(
    <PlansProvider>
      <App />
    </PlansProvider>
)
