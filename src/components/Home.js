import React from 'react'
import Heading from './Heading';
import UserList from './UserList';

export default function Home() {
	return (
		<>
			<h3 className="text-center mb-3 font-weight-bold text-white bg-dark">React CRUD Application </h3>
			<Heading />
			<UserList />
		</>
	)
}