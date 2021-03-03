import axios from 'axios';
export default axios.create({
  baseURL: 'https://thingproxy.freeboard.io/fetch/https://jobs.github.com/'
})