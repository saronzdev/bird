import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export async function login(username, password) {
  try {
    const body = {username, password}
    const {data} = await axios.post(API_URL + 'api/v1/login', body)
    return data
  }
  catch(e) {
    return {
      error: true,
      status: e.status,
      msg: e.toString()
    }
  }
}