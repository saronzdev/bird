import React, {useState, useEffect} from 'react'
import {getPosts} from '../api/getPosts'
import {useParams} from 'react-router-dom'
import Tweet from '../components/Tweet'
import CreatePost from '../components/CreatePost.jsx'
import '../styles/User.css'
import {getUser} from '../api/getUser.js'

export default function User() {
  const {username} = useParams()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [own, setOwn] = useState(false)
  
  async function getUserById() {
    const {id} = JSON.parse(localStorage.getItem('authData'))
    const user = await getUser(id)
    if (!user.error) {
      if (username === user.username) {
        setOwn(true)
      }
    }
  }

  useEffect(() => {
    async function fetchPosts(){
      setData(await getPosts(username, setLoading)) 
    }
    fetchPosts()
    getUserById()
  }, [])
  
  if (loading){
    return <div className='no-posts'>Cargando...</div>
  }
  
  if (data.error){
    if (data.status !== 404) {
      return <div className='no-post'>Error with status code: {data.status}</div>
    }
  }

  return (
    <div className='main-div-user'>
      {!data.error && <h1 style={{margin: 0}}>{data.name}</h1>}
      {own && <CreatePost data={data} setData={setData}/>}
      {data.status === 404 ? <div className='no-posts'>No hay publicaciones...</div> : data.posts.map((post, i) => <Tweet key={i} post={post.body} data={data}/>)}
    </div>
  )
}