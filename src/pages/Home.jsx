import React, {useState, useEffect} from 'react'
import {getUsers} from '../api/getUsers.js'
import {getAllPosts} from '../api/getAllPosts.js'
import UserCard from '../components/UserCard.jsx'
import '../styles/Home.css'
import Tweet from '../components/Tweet.jsx'

export default function Home() {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		getAllPosts(setData, setLoading)
	}, [])

  if (loading) {
		return <div>Cargando...</div>
	}
  
  if (data.error) {
		if (data.status === 404) {
      return <div>No hay usuarios</div>
    }
    else {
      return <div>Error with status code {data.status}</div>
    }
	}

	return (
	<>
	<h1>Inicio</h1>
  {data.map((post, i) => <Tweet key={i} post={post.body} data={post}/>)}
	</>
    	
	)
}