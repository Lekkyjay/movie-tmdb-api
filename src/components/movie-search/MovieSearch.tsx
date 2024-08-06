import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { category } from '../../api/tmdbApi'
import Button from '../button/Button'
import Input from '../input/Input'
import './movieSearch.scss'

interface IProps {
  keyword: string
  category: string
}

export default function MovieSearch(props: IProps) {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '')

  const goToSearch = useCallback(
    () => {
      if (keyword.trim().length > 0) {
        navigate(`/${category[props.category as keyof typeof category]}/search/${keyword}`)
      }
    },
    [keyword, props.category, navigate]
  )

  useEffect(() => {
    const enterEvent = (e: KeyboardEvent) => {
      e.preventDefault()
      if (e.keyCode === 13) {
        goToSearch()
      }
    }
    document.addEventListener('keyup', enterEvent)
    return () => {
      document.removeEventListener('keyup', enterEvent)
    }
  }, [keyword, goToSearch])

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>Search</Button>
    </div>
  )
}