import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import User from './pages/User.jsx'
import Welcome from './pages/Welcome.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Welcome/>,
    errorElement: <NotFound/>
	},
  {
    path: '/home',
    element: <Home/>,
  },
  {
    path: '/signup',
    element: <Register/>
  },
  {
    path: '/signin',
    element: <Login/>
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
