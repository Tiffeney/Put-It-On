import React, {Component} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import httpClient from '../../utilities/httpClient';

class Profile extends Component {
    state = { 
        days: [],
        profile: null,
        editable: false,
        user: null
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    async componentDidMount() {
        let { currentUser } = this.props
    }
    
    handleSubmit = async (e, updatedInfo) =>{
        let { currentUser } = this.props;

        let res = await axios.patch(`/api/users/${currentUser._id}`, updatedInfo); 
        // let res = await httpClient.authenticate( user, `/api/users/${currentUser._id}`, "patch");
        if (res) {
            this.props.onUpdateSuccess();
            this.toggleEdit(false)
        }
        // this.toggleEdit(false)
    }

    toggleEdit = (editable) =>{
        this.setState({ editable: editable })
    }

    handleDelete = async (e) => {
        let { currentUser } = this.props;
        let res = await axios.delete(`/api/users/${currentUser._id}`);
        if (res) {
            this.props.history.push('/logout');
        }
    }

    render () {
        let { currentUser } = this.props;
        // let currentUser = {}
        let { editable, user } = this.state;
        return (
            <div>
            <h1>Your Profile</h1> 

            <div> 
            {
                !editable && currentUser && 
                <div>
                    Your name: { currentUser.name } <br />
                    Your email: { currentUser.email } <br />    
                </div>
            }
            </div>
            {
            editable && currentUser &&
                <div>
                  <Form user={user} onSubmit={this.handleSubmit} />
                 </div>
            }

                <ButtonToolbar>
                    <Button onClick={()=> this.toggleEdit(true)} variant="primary">Edit</Button>
                    <Button onClick={this.handleDelete} variant="primary" >Delete</Button>
                </ButtonToolbar>
            
            
            
            </div>
        )
    }
}
export default Profile;