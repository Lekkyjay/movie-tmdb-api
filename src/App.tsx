import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import tmdbApi from './api/tmdbApi'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
import './App.scss'

function App() {
  const [items, setItems] = useState<any>([])

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      response = await tmdbApi.getMoviesList('popular', {params})
      console.log(response)
      setItems(response.results)
    }
    getList()
  }, [])

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
