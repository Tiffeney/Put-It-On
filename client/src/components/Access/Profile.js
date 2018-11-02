import React, { Component } from 'react';
import Header from '../universal/Header/Header';


class Profile extends Component {
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
        let { weight, height, gender, birthday } = this.state;
        let user = await ({ weight, height, gender, birthday }, "/api/users");
        this.setState({ weight: "", height: "", gender: "", birthday: "" });
        if (user) {
            this.props.login();
            this.props.history.push('/')
        }
    }

    render () {
        let { weight, height, gender, birthday } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <Header text={"Welcome To Your Profile"}/>
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                            <label>Your Current Weight: </label>
                            <input
                                type="text"
                                name="weight"
                                placeholder="101 pounds"
                                onChange={handleChange}
                                value={weight}/>
                                 <label>Height: </label>
                            <input
                                type="text"
                                name="height"
                                placeholder="5'3"
                                onChange={handleChange}
                                value={height}/>
                                 <label>Gender: </label>
                            <input
                                type="text"
                                name="gender"
                                placeholder="Female, Male, or Other"
                                onChange={handleChange}
                                value={gender}/>
                            <label>Birthday: </label>
                            <input
                                type="text"
                                name="birthday"
                                placeholder="12/13/1990"
                                onChange={handleChange}
                                value={birthday}/>
                            <button type="submit">Submit</button>
                            <div>
                            <button type="edit">Update Profile</button>
                            <button type="delete">Delete Your Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;