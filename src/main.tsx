import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApiContextProvider} from "./App/context/Context";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApiContextProvider>
          <App />
      </ApiContextProvider>
  </React.StrictMode>
)
