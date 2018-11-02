import React, { Component } from  'react';
import MealTable from '../Meals/Meals';
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';


class DayDisplay extends Component {
    render() {
        let { day, createDay } = this.props;
        console.log(day);
        if (!day) return (
          <div>
            <h1>No Day to display</h1>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Calories
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Weight
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </Form>;
              
            <button className="btn btn-primary" onClick={createDay}>Add</button>
             {/* {<div onClick={createDay}><i class="far fa-calendar-plus"></i></div>} */}
          </div>
        )
        return(
            <div>
              Date: {day.date}<br/>
              Weight: {day.weight}<br/>
              CaloriesLeft: {day.caloriesLeft}
              <div><i class="fas fa-utensils"></i></div>
              {day.meals.length > 0 ? <MealTable meals={day.meals}/> : <h3>Awaiting Meals</h3>}
              {/* {day.caloriesLeft}, {day.weight}, {day.date} */}
            </div>
        )
    }
}

export default DayDisplay