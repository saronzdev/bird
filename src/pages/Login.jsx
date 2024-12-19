import React, {useEffect, useState} from 'react'
import {login} from '../api/loginUser.js'
import {useNavigate} from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const nav = useNavigate()

  async function handlerSubmit(e) {
    e.preventDefault()
    const data = await login(user, password)
    localStorage.setItem('authData', JSON.stringify(data))
    if (!data.error) nav(`/user/${user}`, {replace: true})
    setPassword('')
    setUser('')
  }

  return (
    <div>
      <form onSubmit={(e) => handlerSubmit(e)}>
        <input type='text' placeholder='Nombre de usuario' autoFocus
        onChange={(e) => setUser(e.target.value)} value={user}/>
        <input type='password' placeholder='Contraseña'
        onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button type='submit'>Inicia sesión</button>
      </form>
    </div>
  )
}

export default Login