import {Route, BrowserRouter, createBrowserRouter, RouterProvider, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import User from './pages/User.jsx'
import Welcome from './pages/Welcome.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes basename='https://bird-flax.vercel.app' >
        <Route path='/' element={<Welcome/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/suer/:username' element={<User/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
		</BrowserRouter>
	)
}

export default App
