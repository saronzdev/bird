import React, {useState} from 'react'
import '../styles/CreatePost.css'
import {useParams} from 'react-router-dom'
import {createPosts} from '../api/createPosts.js'

function CreatePost({data, setData}) {
  const [post, setPost] = useState()
  const {username} = useParams()


  async function submitHandler(e) {
    e.preventDefault()
    console.log(data)
    const result = await createPosts(username, post)
    if (!result.error) {
      alert('Publicado')
      setData(result)
    } 
    else {
      alert('Ha ocurrido un error')
    }
    setPost('')
  }

  return (
    <>
      <div className='form-cn'>
        <form
        className='form'
        onSubmit={(e) => submitHandler(e)}>
          <textarea
          className='tx-area'
          rows={4}
          cols={20}
          placeholder='¿Qué estás pensando...?'
          required
          value={post}
          autoFocus
          type='text'
          onChange={(e) => {setPost(e.target.value)}}>
          </textarea>
          <button
          className='btn-submit'
          type='submit'>
          Publicar
          </button>
        </form>
      </div>
    </>
  )
}

export default CreatePost