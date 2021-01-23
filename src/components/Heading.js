import React from 'react'
import {Link} from 'react-router-dom';
import {
	Navbar,
	Nav,
	NavItem,
	NavbarBrand,
	Container
} from 'reactstrap';

export default function Heading() {
	return (
		<Navbar color="dark" dark>
			<Container>
				<NavbarBrand href="/" >My Team</NavbarBrand>
				<Nav>
					<NavItem>
					<Link to="/add" className='btn btn-primary'>Add user</Link>
					</NavItem>
				</Nav>
			</Container>
			<Container>head</Container>
		</Navbar>
	)
}