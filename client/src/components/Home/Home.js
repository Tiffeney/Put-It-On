import React, { Component } from 'react';
import Header from '../universal/Header/Header';
import { Calendar } from 'react-calendar';
import axios from 'axios';



class Home extends Component {
    state = {
        date: new Date(),
        // selected: false,
        currentDay: { },
        currentUser: ""
      };
    
      async componentDidMount() {
        let response = await axios.get('/api/days');
        
      };
    
    
      onChange = date => this.setState({ date })
    render() {
        return(
            <div>
             <Header text={"Welcom To Put It On!"}/>
             <div className="row">
             <Calendar
                onChange={this.onChange}
                value={this.state.date}
            />
            <div>
                <h1>Day Display</h1>
                <p>{this.state.date.toString()}</p>
            </div>
                 <div className="column column-50 column-offset-25">
                     <img alt="VIP" src="https://tdinj.com/wp-content/uploads/2017/02/Love-Yourself-TDINJ.com_.png"/>
                 </div>
            </div>
        </div>
        )
    }
}
// export default () => {
//     return (
//         <div>
//             <Header text={"Welcom To Put It On!"}/>
//             <div className="row">
//                 <MyCalendar />
//                 <div className="column column-50 column-offset-25">
//                     <img alt="VIP" src="https://tdinj.com/wp-content/uploads/2017/02/Love-Yourself-TDINJ.com_.png"/>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Home
