import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
