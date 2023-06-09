import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/fonts/Satoshi/Satoshi-Variable.ttf'
import './assets/fonts/Satoshi/Satoshi-Regular.ttf'
import './assets/fonts/Satoshi/Satoshi-Bold.ttf'


// localStorage.setItem('cart',JSON.stringify(cart))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
