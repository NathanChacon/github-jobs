import axios from 'axios';

export default axios.create({
  baseURL: 'https://cors-proxy.htmldriven.com/?https://jobs.github.com/'
})