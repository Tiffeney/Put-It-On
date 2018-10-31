import React, { Component } from 'react';
// import moment from 'moment';
import Calendar from 'react-calendar';

export default class Calendar extends React.Component {
    render() {
        return (
            <div className="calendar-container">
                <h2>Calendar</h2>
            </div>
        );
    }
}

// class Calendar extends Component {
//   state = {
//     date: new Date(),
//   }

//   onChange = date => this.setState({ date })

//   render() {
//     return (
//       <div>
//         <Calendar
//           onChange={this.onChange}
//           value={this.state.date}
//         />
//       </div>
//     );
//   }
// }

// export default Calendar