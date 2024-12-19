import React, {useEffect, useState} from 'react'
import {login} from '../api/loginUser.js'
import {useNavigate, Link} from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  const [data, setData] = useState({})
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  const nav = useNavigate()

  async function handlerSubmit(e) {
    e.preventDefault()
    const result = await login(user, password)
    if (result.status === 401) {
      document.getElementById('lg-psw').value = null
    } else {
      document.getElementById('lg-user').value = null
      document.getElementById('lg-psw').value = null
    }
    setData(result)
    if (!result.error) {
      const authData = {id: result.id, token: 'Bearer ' + result.token}
      localStorage.setItem('authData', JSON.stringify(authData))
      nav(`/user/${user}`, {replace: true})
    }
  }

  return (
    <div className='lg-ctn'>
      <form className='lg-form' onSubmit={(e) => handlerSubmit(e)}>
        <h1 className='web-name'>Bird</h1>
        <h2 className='head'>Inicio de Sesión</h2>
        <input className='lg-inputs' id='lg-user' type='text' placeholder='Nombre de usuario' required autoFocus
        onChange={(e) => setUser(e.target.value)}/>
        <div className='error-ctn'>
          {data.status === 404 && <p className='error-txt'>Nombre de usuario incorrecto</p>}
        </div>
        <input className='lg-inputs' id='lg-psw' type='password' placeholder='Contraseña' required
        onChange={(e) => setPassword(e.target.value)}/>
        <div className='error-ctn'>
          {data.status === 401 && <p className='error-txt'>Contraseña incorrecta</p>}
        </div>
        <button className='lg-btn' type='submit'>Inicia sesión</button>
      </form>
      <Link className='no-account' to='/register'>No tengo cuenta</Link>
    </div>
  )
}