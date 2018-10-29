import React, { Component } from 'react';
import Header from '../universal/Header/Header';
import httpClient from '../../utilities/httpClient';

class Signup extends Component {
    state = { 
        email: "",
        password: "",
        name: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { email, password, name } = this.state;
        let user = await httpClient.authenticate({ email, password, name }, "/pio/users");
        this.setState({ email: "", password: "", name: "" });
        if (user) {
            this.props.onSignupSuccess();
            this.props.history.push('/')
        }
    }

    render() {
        let { email, password, name } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <Header text={"Signup"}/>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Jane Doe"
                                onChange={handleChange}
                                value={name}
                            />
                            <label>Email: </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="JaneDoe@pleasebealive.com"
                                onChange={handleChange}
                                value={email}
                            />
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="SHHHH password..."
                                onChange={handleChange}
                                value={password}
                            />
                            <input type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;