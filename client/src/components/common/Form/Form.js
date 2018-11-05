import React, { Component } from 'react';
// import Header from '../common/Header/Header';
// import httpClient from '../../utilities/httpClient';

class Form extends Component {
    constructor (props) {
        super(props)

        //Could refactor so state contains user object
        this.state = { 
            name: ""
        }
    }
   

    componentDidMount () {
        let { user } = this.props;
        if(user){
            this.setState(user)
        }
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.onSubmit(e, this.state)
    }

    render() {
        let { email, password, name} = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                
                <div className="row">
                    <div className="column column-50 column-offset-25">
                        <form onSubmit={handleSubmit}>
                        <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                value={name}
                            />

                            <input type="submit" onClick={handleSubmit}/>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;


