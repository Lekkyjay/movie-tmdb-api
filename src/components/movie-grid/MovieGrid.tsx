import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi, { category, movieType, tvSeriesType } from '../../api/tmdbApi'
import OutlineButton from '../button/OutlineButton'
import MovieCard from '../movie-card/MovieCard'
import './movie-grid.scss'

interface IProps {
  category: string
}

export default function MovieGrid(props: IProps) {
  const [items, setItems] = useState<ITvIMovie[]>([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const { keyword } = useParams()

  useEffect(() => {
    const getList = async () => {
      let response = null
      if (keyword === undefined) {
        const params = {}
        switch(props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
            break
          default:
            response = await tmdbApi.getTvList(tvSeriesType.popular, { params })
        }
      } 
      else {
        const params = { query: keyword }
        response = await tmdbApi.search(props.category, { params })
      }
      setItems(response.results)
      setTotalPage(response.total_pages)
    }
    getList()
  }, [props.category, keyword])

  const loadMore = async () => {
    let response = null
    if (keyword === undefined) {
      const params = { page: page + 1 }
      switch(props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, { params })
          break
        default:
          response = await tmdbApi.getTvList(tvSeriesType.popular, { params })
      }
    } 
    else {
      const params = { page: page + 1, query: keyword }
      response = await tmdbApi.search(props.category, { params })
    }
    setItems([...items, ...response.results])
    setPage(page + 1)
  }

  return (
    <>
      <div className="section mb-3">
        MovieSearch
      </div>
      <div className="movie-grid">
        { items.map((item, i) => <MovieCard category={props.category} item={item} key={i}/>) }
      </div>
      {
        page < totalPage 
        ? (
          <div className="movie-grid__loadmore">
            <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
          </div>
          ) 
        : null
      }
    </>
  )
}