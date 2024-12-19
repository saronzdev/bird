import axios from 'axios'

export async function login(username, password) {
  try {
    const data = {username, password}
    const result = await axios.post('http://localhost:3000/api/v1/login', data)
    return result.data
  }
  catch(e) {
    return {
      error: true,
      status: e.status,
      msg: e.toString()
    }
  }
}