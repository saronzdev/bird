import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Welcome from './pages/Welcome'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome/>
	},
  {
    path: '/login',
    element: <Login/>
  },
	{
		path: '/home',
		element: <Home/>,
	},
	{
		path: '/user/:username',
		element: <User/>,
	}
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
