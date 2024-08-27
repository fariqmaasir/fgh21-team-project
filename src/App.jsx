import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about-us',
    element: <About />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App