import axios from 'axios'

export const getUsers = async (setUsers, setLoading, setError) => {
	try {
		const {data} = await axios.get('http://localhost:3000/api/v1/users/')
		return setUsers(data)
	} catch (e) {
		return setError(e.toString())
	} finally {
		return setLoading(false)
	}
}
