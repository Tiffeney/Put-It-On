import React, { Component } from 'react';
// import Header from '../common/Header/Header';
// import httpClient from '../../utilities/httpClient';

class Form extends Component {
    constructor (props) {
        super(props)

        //Could refactor so state contains user object
        this.state = { 
            email:"",
            password: "",
            name: "",
            gender: "",
            age: "",
            location: "",
            training: "",
            pace: "",
            goal: "",
            level: ""
        }
    }
   

    componentDidMount () {
        let { user } = this.props
        console.log(this.props)
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
        let { email, password, name, gender, age, location, training, pace, goal, level } = this.state;
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
                            <label>Email: </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="example@example.com"
                                onChange={handleChange}
                                value={email}
                            />
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Secret Password..."
                                onChange={handleChange}
                                value={password}
                            />
                            <h1>Tell Us About Yourself</h1>
                            <label>Gender: </label>
                            <input
                                type="text"
                                name="gender"
                                placeholder="Male or Female"
                                onChange={handleChange}
                                value={gender}
                            />
                            <label>Age: </label>
                            <input
                                type="text"
                                name="age"
                                placeholder="age"
                                onChange={handleChange}
                                value={age}
                            />
                            <label>Location: </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Los Angeles"
                                onChange={handleChange}
                                value={location}
                            />
                            <label>What Are you Training For?: </label>
                            <input
                                type="text"
                                name="training"
                                placeholder="5k..10k..Marathon"
                                onChange={handleChange}
                                value={training}
                            />
                            <label>What's Your Pace?: </label>
                            <input
                                type="text"
                                name="pace"
                                placeholder="8:00 miles"
                                onChange={handleChange}
                                value={pace}
                            />
                            <label>Do You Have a Goal?: </label>
                            <input
                                type="text"
                                name="goal"
                                placeholder="What are you working towards?"
                                onChange={handleChange}
                                value={goal}
                            />
                            <label>Are You Competitive or Just Like to Run for Fun?: </label>
                            <input
                                type="text"
                                name="level"
                                placeholder="Beginner?... Intermediate?... Advanced?"
                                onChange={handleChange}
                                value={level}
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





// import React, { Component } from 'react';
// import Header from '../universal/Header/Header';
// import httpClient from '../../utilities/httpClient';

// class Form extends Component {
//     state = { 
//         weight: "",
//         height: "",
//         gender: "",
//         birthday: ""
//     }

//     handleChange = (e) => {
//         let { name, value } = e.target;
//         this.setState({ [name]: value });
//     }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         let { weight, height, gender, profile } = this.state;
//         let user = await httpClient.authenticate({ email, password, name }, "/api/users");
//         this.setState({ weight: "", height: "", gender: "", birthday:  "",});
//         if (user) {
//             this.props.onSignupSuccess();
//             this.props.history.push('/')
//         }
//     }

//     render() {
//         let { weight, height, gender, profile } = this.state;
//         let { handleChange, handleSubmit } = this;
//         return (
//             <div>
//                 <Header text={"Signup"}/>
//                 <div className="row">
//                     <div className="column column-50 column-offset-25">
//                         <form onSubmit={handleSubmit}>
//                             <label>Name: </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Jane Doe"
//                                 onChange={handleChange}
//                                 value={name}
//                             />
//                             <label>Email: </label>
//                             <input
//                                 type="text"
//                                 name="email"
//                                 placeholder="JaneDoe@pleasebealive.com"
//                                 onChange={handleChange}
//                                 value={email}
//                             />
//                             <label>Password: </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="SHHHH password..."
//                                 onChange={handleChange}
//                                 value={password}
//                             />
//                             <input type="submit"/>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Form;