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
        // SEND DATA
        // let { weight, height, gender, birthday } = this.state;
        // let response = await axios.get({ weight, height, gender, birthday  }, "/profile");
        this.setState({ weight: "", height: "", gender: "", birthday: "" });
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
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;