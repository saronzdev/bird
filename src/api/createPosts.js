import axios from 'axios'

export async function createPosts(username, post) {    
  try{
    const {data} = await axios.post('http://localhost:3000/api/v1/posts/' + username, {post})
    return data
  }	catch(e) {
			return {
				error: true,
				status: e.status,
        msg: e.toString().split(':')[1]
			}
    }
}