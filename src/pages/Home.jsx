import React, {useState, useEffect} from 'react'
import {getUsers} from '../api/getUsers.js'
import UserCard from '../components/UserCard.jsx'
import '../styles/Home.css'

const Home = () => {
	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const [users, setUsers] = useState([])
	useEffect(() => {
		getUsers(setUsers, setLoading, setError)
	}, [])

  if (loading) {
		return <div>Cargando...</div>
	}
  
  if (error){
		return <div>{error}</div>
	}

  if (!users[0]){
    return <div>No hay usuarios</div>
  }

	return (
	<>
	<h1>Usuarios</h1>
	<div className='home-main-div'>
		{users.map((user, i) => {
			return (
			<UserCard
			key={i}
			name={user.name}
			user={user.username}
			posts={user.posts.length}
			/>
			)
		})}
	</div>
	</>
    	
	)
}

export default Home
