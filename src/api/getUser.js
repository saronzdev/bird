import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export async function getUser(id) {
  try {
    const {data} = await axios.get(API_URL + 'api/v1/users/id/' + id)
    return data
  }
  catch (e) {
    return {
      error: true,
      status: e.status,
      msg: e.toString()
    }
  }
}