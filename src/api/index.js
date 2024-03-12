import axios from 'axios'
import store from '@/store/store'
import {BASE_URL} from '@/config/env'

let isAlreadyFetchingAccessToken = false
let subscribers = []
const onAccessTokenFetched = accessToken => {
  subscribers = subscribers.filter(callback => callback(accessToken))
}
const addSubscriber = callback => {
  subscribers.push(callback)
}

const http = axios.create({
  //TODO will change when api will be
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
const {dispatch} = store

// //TODO will change when api will be
// http.interceptors.request.use(
//   config => {
//     const {
//       auth: {user_token}
//       // ['Accept-Language']: {language}
//     } = store.getState()
//     if (!!user_token) {
//       config.headers.Authorization = `Bearer ${user_token}`
//     }
//     // if (!!language) {
//     //   config.headers['Accept-Language'] = language
//     // }
//     return config
//   },
//   error => {
//     // Handle request errors here
//     return Promise.reject(error)
//   }
// )

// http.interceptors.response.use(
//   response => response,
//   async error => {
//     const {config, response} = error
//     console.log('err', config)
//     const {
//       auth: {refresh_user_token, user_token}
//     } = store.getState()
//     if (user_token) {
//     }
//
//     return Promise.reject(response?.data?.errors)
//   }
// )

export default http
