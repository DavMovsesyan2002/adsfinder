import axios from 'axios'

export default axios.create({
    baseURL: `https://secure-badlands-92567.herokuapp.com/users`
  });