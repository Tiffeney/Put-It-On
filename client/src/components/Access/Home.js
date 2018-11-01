import React from 'react';
import Header from '../universal/Header/Header';
import MyCalendar from '../MyCalendar/MyCalendar';
export default () => {
    return (
        <div>
            <Header text={"Welcom To Put It On!"}/>
            <div className="row">
            <MyCalendar />
                <div className="column column-50 column-offset-25">
                    <img alt="VIP" src="https://tdinj.com/wp-content/uploads/2017/02/Love-Yourself-TDINJ.com_.png"/>
                </div>
            </div>
        </div>
    )
}