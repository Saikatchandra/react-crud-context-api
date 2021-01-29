import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {
	ListGroup,
	ListGroupItem,
	Button
} from 'reactstrap';
import {GlobalContext} from '../Context/GlobalState'

export default function UserList() {
 const {users, removeUser} = useContext(GlobalContext)
 console.log(users);
	return (
		<ListGroup className='mt-2'>
		{users.map(user =>(

			<ListGroupItem className="d-flex">
			<strong>{user.name}</strong>
			<div className="ml-auto">
				<Link to={`/edit/${user.id}`} className="btn btn-warning mr-1"> Edit</Link>
				<Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
			</div>
			</ListGroupItem>

		))}
			
		</ListGroup>
	)
}