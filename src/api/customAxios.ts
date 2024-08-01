import axios from 'axios'
import queryString from 'query-string'

import apiConfig from './apiConfig'

const customAxios = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: { 'Content-Type': 'application/json' },
  paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
})

customAxios.interceptors.request.use(async (config) => config)

customAxios.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data
  }

  return response
}, (error) => {
  throw error
})

export default customAxios