import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

// This creates a `client` of axios. Basically, it makes it so
// you don't have to put the full URL in each request
// To use, import this client, then use `client.get('/songs')`
const client = axios.create({ baseURL: API_URL })

export default client
