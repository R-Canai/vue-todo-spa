import axios from 'axios'
import { authTokenKey } from './constant'

export default axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 5000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': `JWT ${localStorage.getItem(authTokenKey)}`
  }
})
