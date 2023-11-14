import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'meli-bagues-fragancias-back-production.up.railway.app';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)
