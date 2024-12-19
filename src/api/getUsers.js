import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getUsers = async (setUsers, setLoading, setError) => {
	try {
		const {data} = await axios.get(API_URL + 'api/v1/users/')
		return setUsers(data)
	} catch (e) {
		return setError(e.toString())
	} finally {
		return setLoading(false)
	}
}
