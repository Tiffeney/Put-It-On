import React from 'react';
import Header from '../universal/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header text={"Ops, Please Try Again"}/>
            <div className="row">
                <div className="column column-50 column-offset-25">
                    <img alt="Profile" src="http://cdn.shopify.com/s/files/1/0770/1091/products/little-booties-matter-boy-brief-pink_grande.jpg?v=1467416428" alt="404"/>
                </div>
            </div>
        </div>
    )
}

export default NotFound