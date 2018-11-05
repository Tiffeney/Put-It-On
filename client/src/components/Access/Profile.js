import React, {Component} from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Form from '../common/Form/Form';

import ListGroup from 'react-bootstrap/lib/ListGroup';
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
        // let response = await axios.get(`/api/users/${currentUser._id}`);  //Obtains group info
        // console.log(response)
        // let { user } = response.data
        
        // this.setState({
        //     days: user.days,
        //     user:user
        // })
    }
    
    handleSubmit = async (e, user) =>{
        let {currentUser} = this.props

        let res = await httpClient.authenticate( user, `/api/users/${currentUser._id}`, "patch");
        if (res) {
            this.props.onUpdateSuccess();
            this.toggleEdit(false)
        }
        // this.toggleEdit(false)
    }

    toggleEdit = (editable) =>{
        this.setState({editable})
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
            editable && user &&
                <div>
                  <Form user={user} onSubmit={this.handleSubmit} />
                 </div>
            }

                <ButtonToolbar>
                    <Button onClick={()=> this.toggleEdit(true)}variant="primary">Edit</Button>
                    <Button onClick={this.handleDelete} variant="primary" >Delete</Button>
                </ButtonToolbar>
            
            
            
            </div>
        )
    }
}
export default Profile;