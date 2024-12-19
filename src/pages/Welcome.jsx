import React from 'react'
import '../styles/Welcome.css'
import {useNavigate} from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()
  const goTo = (path) => {
    navigate(path)
  }
  return (
    <div className='wc-main-cn'>
      <div className='wc-opt-cn'>
        <h2>Bienvenido</h2>
        <button
        onClick={()=> goTo('/login')}
        >Iniciar Sesión</button>
        <button
        onClick={()=> goTo('/register')}
        >Crear Cuenta</button>
        <button
        onClick={()=> goTo('/home')}
        >Sesión de Invitado</button>
      </div>
    </div>
  )
}

export default Welcome