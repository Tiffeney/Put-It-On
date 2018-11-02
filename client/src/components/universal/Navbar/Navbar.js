import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
// import 'milligram';

export default ({ currentUser }) => {
    return (
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link">PIO</span>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
            </div>
            <div className="float-right">
                {currentUser
                    ? (
                        <span>
                            <span className="nav-link">Welcome {currentUser.name}</span>
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </span>        
                    )
                    : (
                        <span>
                            <Link className="nav-link" id="login" to="/login">Login</Link>
                            <Link className="nav-link" id="signup" to="/signup">Signup</Link>           
                        </span>
                    )
                }
            </div>
        </nav>
    )
};