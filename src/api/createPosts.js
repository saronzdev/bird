import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export async function createPosts(username, post) {    
  try{
    const {data} = await axios.post(API_URL + 'api/v1/posts/' + username, {post})
    return data
  }	catch(e) {
			return {
				error: true,
				status: e.status,
        msg: e.toString().split(':')[1]
			}
    }
}