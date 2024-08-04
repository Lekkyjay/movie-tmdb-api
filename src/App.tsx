import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import 'swiper/css'
import './App.scss'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />      
        },
        {
          path: "/:category",
          element: <Catalog />      
        },
        {
          path: "/:category/search/:keyword",
          element: <Catalog />      
        },
        {
          path: "/:category/:id",
          element: <Detail />      
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
