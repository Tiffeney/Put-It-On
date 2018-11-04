import React, { Component } from 'react';
import Header from '../universal/Header/Header';
import { Calendar } from 'react-calendar';
import axios from 'axios';
import moment from 'moment';
import DayDisplay from '../DayDisplay/DayDisplay';
import { Grid, Row, Col } from 'react-bootstrap';
import httpClient from '../../utilities/httpClient';
// import CreateMealItem from '../CreateMealItem';

class Home extends Component {
    state = {
        date: new Date(),
        currentDay: null,
        days: [],
        currentUser: "",
        dayForm: { 
            weight: "",
            calories: "",
            date: ""
        }
      };
    
      async componentDidMount() {
        let response = await axios.get('/api/days');
        let { days } = response.data.user;
        let currentDay = this.filterDay(new Date(), days);
        this.setState({ days, currentDay });
      };

      filterDay = (date, days) => {
        date = moment(date).format("MM/DD/YYYY");
        let day = days.filter(d => {
            if (d.date === date) return d;
        });
        return day[0]
        // this.setState({ currentDay: day[0]});
      }
    
      onChange = date => {  
          this.setState({ date })
          let currentDay = this.filterDay(date, this.state.days);
          this.setState({ currentDay });
          
    }

    createDay = async (e) => {
        e.preventDefault();
        let { dayForm } = this.state;
        let { date } = dayForm;
        let res = await httpClient({ method: "post", url: "/api/days", data: dayForm });
        let { days } = res.data.user;
        let currentDay = this.filterDay(date, days);
        this.setState({ 
            dayForm: {
                calories: "",
                weight: "",
                day: ""
            },
            days,
            currentDay
        })
    }

    handleDayChange = (e) => {
        let { name, value } = e.target;
        let { dayForm } = this.state;
        if (name === "date") {
            this.setState({ dayForm: {...dayForm, [name]: moment(value).format("MM/DD/YYYY") } });
        } else {
            this.setState({ dayForm: {...dayForm, [name]: value} });
        }
    }

    // createMeal = (e) => {
    //     e.preventDefault();
    //     let { mealForm } = this.state;
    //     let res = await httpClient({ method: "post", url: "/api/days/dayId/meals/", data: mealForm })
    //     let { meal }
    // }

    deleteMeal = () => {

    }
    //  saveDay = () => {
    //    let { day } = this;
    //    await axios.post('api/days');
    //    this.props.history.push('/')
    //  }
    
    
    render() {
        let { currentDay } = this.state;
        let { createDay, handleDayChange } = this; 
        return(
            <Grid>
                <Row>
                    <Header text={"Welcome To Put It On!"}/>
                </Row>
                <Row>
                    <Col md={6} mdPull={4}>
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                        {/* {<div><i class="far fa-calendar-plus"></i></div>} */}
                    </Col>
                    <Col md={4}>
                        <DayDisplay 
                            handleDayChange={handleDayChange}
                            createDay={createDay} 
                            day={currentDay}
                            user={this.state.currentUser}/>
                    </Col>
                </Row>
        </Grid>
        )
    }
}

export default Home
