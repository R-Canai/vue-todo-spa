import axios from 'axios'
import { authTokenKey } from './constant'

const jwt = localStorage.getItem(authTokenKey)

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.timeout = 5000

if (jwt) {
  axios.defaults.headers['Authorization'] = `JWT ${jwt}`
}

export default axios
