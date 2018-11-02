import React, { Component } from 'react';
import Header from '../universal/Header/Header';
import { Calendar } from 'react-calendar';
import axios from 'axios';
import moment from 'moment';
import DayDisplay from '../DayDisplay/DayDisplay';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    state = {
        date: new Date(),
        currentDay: null,
        days: [],
        currentUser: ""

      };
    
      async componentDidMount() {
        let response = await axios.get('/api/days');
        let { days } = response.data.user;
        this.setState({ days });
      };

      filterDay = (date) => {
        date = moment(date).format("MM/DD/YYYY");
        let day = this.state.days.filter(d => {
            if (d.date === date) return d;
        });
        this.setState({ currentDay: day[0]});
      }
    
      onChange = date => {  
          this.setState({ date })
          this.filterDay(date);
    }




    
    render() {
        let { currentDay } = this.state;
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
                    <Col md={4}>{<div><i class="far fa-calendar-plus"></i></div>}
                        <DayDisplay day={currentDay}/>
                    </Col>
                </Row>
             <div className="row">
            <div>
            <h6>{moment(this.state.date).format("MM/DD/YYYY")}</h6>
            
                {/* <h6>{this.state.date.toString()}</h6> */}
            </div>
                 {/* <div className="column column-50 column-offset-25">
                     <img alt="VIP" src="https://tdinj.com/wp-content/uploads/2017/02/Love-Yourself-TDINJ.com_.png"/>
                 </div> */}
            </div>
        </Grid>
        )
    }
}

export default Home
