import axios from 'axios'
import shuffle from 'shuffle-array'

const API_URL = import.meta.env.VITE_API_URL && 'https://bird-api-alpha.vercel.app/'

export const getAllPosts = async (setData, setLoading) => {
	try {
		const {data} = await axios.get(API_URL + 'api/v1/users/')
    const posts = data.map((user) => {
      const {name} = user
      const {username} = user
      const newPosts = user.posts.map((post) => {
        return {...post, name, username}
      })
      return newPosts
    })[0]
		return setData(shuffle(posts))
	} catch (e) {
		return {
      error: true,
      status: e.status,
      msg: e.toString()
    }
	} finally {
		return setLoading(false)
	}
}