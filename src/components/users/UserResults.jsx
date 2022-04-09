import React from 'react'
// import { useState } from 'react'
import { useContext } from 'react'
import GitHubContext from '../../context/GitHub/GitHubContext'
// import { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
	//	const { users, loading, fetchUsers } = useContext
	const { users, loading } = useContext(GitHubContext)
	// const [users, setUsers] = useState([])
	// const [loading, setLoading] = useState(true)

	// useEffect(() => {
	// 	fetchUsers()
	// }, [])

	// const fetchUsers = async () => {
	// 	const response = await fetch(`${process.env.REACT_APP_GIT_URL}/users`, {
	// 	})

	// 	const data = await response.json()
	// 	setUsers(data);
	// 	setLoading(false);

	// }
	if (!loading) {
		return (
			<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols=2'>{users.map((user) => (
				// <h3>{user.login}</h3>
				<UserItem key={user.id} user={user} />
			))}
			</div>
		)

	} else {
		return <Spinner />
	}


}


export default UserResults