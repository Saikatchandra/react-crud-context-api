import React,{useState, useEffect, useContext} from 'react'
import { Link, useHistory} from 'react-router-dom';
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';
import {GlobalContext} from '../Context/GlobalState';
import {v4 as uuid } from 'uuid';

export default function EditUser(props) {
    const [selectedUser, setSelectedUser] = useState({
    	id: '',
    	name: ''
    });


	const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;
    // console.log(currentUserId);

    useEffect(() => {
    	const userId = currentUserId;
    	const selectedUser = users.find(user => user.id === userId)
    	setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/');
    }

    const onChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value })
    }

	return (
		<Form onSubmit={onSubmit}>
        	<FormGroup>
        		<Label>Name</Label>
        		<Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="enter your name"></Input>
        	</FormGroup>
        	<Button type="submit">Update</Button>
        	<Link to='/' className="btn btn-danger ml-2">Cancel</Link>
        </Form>
	)
}