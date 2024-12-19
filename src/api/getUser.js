import axios from 'axios'

export async function getUser(id) {
  try {
    const {data} = await axios.get('http://localhost:3000/api/v1/users/id/' + id)
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