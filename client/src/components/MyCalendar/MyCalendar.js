import React, { Component } from 'react';
import { Calendar } from 'react-calendar'



export default class MyCalendar extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onClickDay={(value) => alert('Clicked day: ', value)}
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

