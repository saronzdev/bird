import axios from 'axios'

export async function getPosts(username, setLoading){
  try {
    const {data} = await axios.get('http://localhost:3000/api/v1/posts/' + username)
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
