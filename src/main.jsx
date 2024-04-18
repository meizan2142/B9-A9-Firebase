import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ContextComponent from './Context/ContextComponent.jsx'
// import ContextComponent from './Context/ContextComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </ContextComponent>
  </React.StrictMode>,
)
