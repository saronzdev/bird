import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  const nav = useNavigate()
  return (
    <>
      <h1>Página no encontrada</h1>
      <p>Esta página no está disponible.</p>
      <button onClick={() => nav('/', {replace: true})}>Ir al inicio</button>
    </>
  )
}