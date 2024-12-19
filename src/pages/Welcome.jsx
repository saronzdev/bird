import React from 'react'
import '../styles/Welcome.css'
import {Link, useNavigate} from 'react-router-dom'
import '../styles/Welcome.css'

function Welcome() {
  const nav = useNavigate()
  const goTo = (path) => {
    nav(path)
  }
  return (
    <div className='wc-ctn'>
      <div className='sec-ctn'>
        <h2 className='wc-msg'>Bienvenido</h2>
        <button className='sec-btn' onClick={()=> goTo('/singin')}>Iniciar Sesión</button>
        <button className='sec-btn' onClick={() => alert('Not avaible')}>Crear Cuenta</button>
        <Link className='invited' to='/home'>Sesión de Invitado</Link>
      </div>
    </div>
  )
}

export default Welcome