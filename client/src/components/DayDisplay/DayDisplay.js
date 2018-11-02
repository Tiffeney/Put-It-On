import React, { Component } from  'react';
import MealTable from '../Meals/Meals';

class DayDisplay extends Component {
    render() {
        let { day } = this.props;
        console.log(day);
        if (!day) return <h1>No Day to display</h1>
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