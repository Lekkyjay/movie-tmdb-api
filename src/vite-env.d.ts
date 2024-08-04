/// <reference types="vite/client" />

interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

interface IMovies {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

interface IVideo {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}

interface IVideos {
  id: number
  results: IVideo[]
}

interface ITv {
  adult: boolean
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: string
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

interface ITvs {
  page: number
  results: ITv[]
  total_pages: number
  total_results: number
}