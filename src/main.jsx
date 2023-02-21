import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormProvider } from './context/formContextApi'
import './index.css'

// const value = ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
