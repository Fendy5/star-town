import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '/dev-api', // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

export default service
