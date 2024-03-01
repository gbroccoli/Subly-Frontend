import "@/index.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "@/app/font/stylesheet.css"
import "@/css/fonst-style.css"
import Erorr404 from '@/pages/errors/404'
import Setting from "@/pages/Setting"
import Profile from "@/pages/profile/Profile"
import MainLayoutPage from "./components/layout/MainLayout"


const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/setting",
        element: <Setting />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "*",
    element: <Erorr404 />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
