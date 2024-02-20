import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./app/font/stylesheet.css"
import "./index.css"


const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
