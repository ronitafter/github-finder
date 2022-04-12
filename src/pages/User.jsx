import React from 'react';
import { useEffect, useContext } from 'react';
import GitHubContext from '../context/GitHub/GitHubContext';
import { useParams } from 'react-router';

function User() {
	const { getUser, user } = useContext(GitHubContext)
	const params = useParams()
	useEffect(() => {
		getUser(params.login)

	}, [])
	return (
		<div>{user.login}</div>
	)
}

export default User