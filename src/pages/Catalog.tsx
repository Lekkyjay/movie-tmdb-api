import { useParams } from 'react-router-dom'
import PageHeader from '../components/page-header/PageHeader'
import { category as categ } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid'

export default function Catalog() {
  const { category } = useParams()

  return (
    <>
      <PageHeader>
        {category === categ.movie ? 'Popular Movies' : 'Popular TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category ? category : ''}/>
        </div>
      </div>
    </>
  )
}