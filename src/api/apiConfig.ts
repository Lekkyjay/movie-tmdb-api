const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig