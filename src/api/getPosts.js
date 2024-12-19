import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export async function getPosts(username, setLoading){
  try {
    const {data} = await axios.get(API_URL + 'api/v1/posts/' + username)
    return data
  } 
  catch(e){
    return {
      error: true,
      status: e.status
    }
  }
  finally {
    setLoading(false)
  }
}
