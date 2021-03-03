import axios from 'axios';
export default axios.create({
  baseURL: 'https://cors-anywhere-nathan-chacon.herokuapp.com/https://jobs.github.com/',
  headers: {
    'Content-Type': 'application/json',
  }
})