import React, { Component } from 'react';
import Header from '../universal/Header/Header';
import httpClient from '../../utilities/httpClient';

class Form extends Component {
    state = { 
        weight: "",
        height: "",
        gender: "",
        birthday: ""
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { weight, height, gender, profile } = this.state;
        let user = await httpClient.authenticate({ email, password, name }, "/api/users");
        this.setState({ weight: "", height: "", gender: "", birthday:  "",});
        if (user) {
            this.props.onSignupSuccess();
            this.props.history.push('/')
        }
    }

    render() {
        let { weight, height, gender, profile } = this.state;
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

export default Form;