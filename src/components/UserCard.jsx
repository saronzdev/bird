import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/UserdCard.css'

const greet = () => {
	console.log('Hola')
}

const UserCard = ({name, user, posts}) => {
	const navigate = useNavigate()
	function onClickHandler(username) {
		navigate(`/user/${username}`)
	}

	return (
		<div className='uc-cont-div'
		onClick={() => onClickHandler(user)}>
			<span>{name}</span>
			<p>@{user}</p>
			<p>Posts: {posts}</p>
		</div>
	)
}

export default UserCard
