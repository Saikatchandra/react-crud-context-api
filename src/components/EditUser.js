import React from 'react'
import {Link} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

export default function EditUser() {
	return (
		<Form>
        	<FormGroup>
        		<Label>Name</Label>
        		<Input type="text" placeholder="enter your name"></Input>
        	</FormGroup>
        	<Button type="submit">Update</Button>
        	<Link to='/' className="btn btn-danger ml-2">Cancel</Link>
        </Form>
	)
}