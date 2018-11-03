import React, { Component } from  'react';
import MealTable from '../Meals/Meals';
import CreateMealForm from '../CreateMealForm';


class DayDisplay extends Component {
    render() {
        let { day, createDay } = this.props;
        if (!day) return (
          <div>
            <h1>No Day to display</h1>      
            <CreateMealForm
              handleDayChange={this.props.handleDayChange}
              createDay={this.props.createDay}
            />    
            {/* <button className="btn btn-primary" onClick={createDay}>Add</button> */}
             {/* {<div onClick={createDay}><i class="far fa-calendar-plus"></i></div>} */}
          </div>
        )
        return(
            <div>
              Date: {day.date}<br/>
              Weight: {day.weight}<br/>
              CaloriesLeft: {day.caloriesLeft}
              <div><i className="fas fa-utensils"></i></div>
              {day.meals.length > 0 ? <MealTable meals={day.meals}/> : <h3>Awaiting Meals</h3>}
              {/* {day.caloriesLeft}, {day.weight}, {day.date} */}
            </div>
        )
    }
}

export default DayDisplay