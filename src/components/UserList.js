import React from 'react'
import {Link} from 'react-router-dom';
import {
	ListGroup,
	ListGroupItem,
	Button
} from 'reactstrap';

export default function UserList() {
	return (
		<ListGroup className='mt-2'>
			<ListGroupItem className="d-flex">
			<strong>User One</strong>
			<div className="ml-auto">
				<Link tp="/edit/1" className="btn btn-warning mr-1"> Edit</Link>
				<Button color="danger">Delete</Button>
			</div>
			</ListGroupItem>
			<ListGroupItem className="d-flex">
			<strong>User One</strong>
			<div className="ml-auto">
				<Link tp="/edit/1" className="btn btn-warning mr-1"> Edit</Link>
				<Button color="danger">Delete</Button>
			</div>
			</ListGroupItem>
		</ListGroup>
	)
}