import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
  headers: {
    common: {
      'Authorization': ''
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

  }
})
