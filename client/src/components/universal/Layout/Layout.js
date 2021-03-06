import React from 'react';
import Navbar from '../Navbar/Navbar';

export default ({ children, currentUser }) => {
    return(
        <div>
            <Navbar currentUser={currentUser} />
            <div className="container">
                {children}
            </div>
        </div>
    )
};