import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Perfil from './pages/Perfil.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/perfil/:user",
    element : <Perfil />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
