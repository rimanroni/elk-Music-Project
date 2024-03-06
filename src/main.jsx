import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import Contaxt from './Contaxt/Contaxt.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Contaxt>
      <RouterProvider router={router}></RouterProvider>
     </Contaxt>
  </React.StrictMode>,
)
