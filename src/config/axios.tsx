import axios from 'axios';
export default axios.create({
  baseURL: 'https://cors.io/?https://jobs.github.com/'
})