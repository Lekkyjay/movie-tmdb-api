import customAxios from './customAxios'

export const category = {
  movie: 'movie',
  tv: 'tv'
}

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
}

export const tvSeriesType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

const tmdbApi = {
  //MOVIES > Lists
  getMoviesList: (type: string, params: any) => {
    const url = 'movie/' + movieType[type as keyof typeof movieType]
    return customAxios.get<any, IMovies>(url, params)
  },
  //TV SERIES LISTS
  getTvList: (type: string, params: any) => {
    const url = 'tv/' + tvSeriesType[type as keyof typeof tvSeriesType]
    return customAxios.get<any, IMovies>(url, params)
  },
  //TV SERIES > Videos
  getVideos: (cat: string, id: string) => {
    const url = category[cat as keyof typeof category] + '/' + id + '/videos'
    return customAxios.get<any, IMovies>(url, {params: {}})
  },
  search: (cat: string, params: any) => {
    const url = 'search/' + category[cat as keyof typeof category]
    return customAxios.get(url, params)
  },
  //MOVIES > Details
  detail: (cat: string, id: string, params: any) => {
    const url = category[cat as keyof typeof category] + '/' + id
    return customAxios.get(url, params)
  },
  credits: (cat: string, id: string) => {
    const url = category[cat as keyof typeof category] + '/' + id + '/credits'
    return customAxios.get(url, {params: {}})
  },
  similar: (cat: string, id: string) => {
    const url = category[cat as keyof typeof category] + '/' + id + '/similar'
    return customAxios.get(url, {params: {}})
  }
}

export default tmdbApi