import React from 'react';
import {Link} from 'react-router-dom';

function main() {
    return (

        <div className="home">
            <h1>HOME</h1>

            <div className="home_buttons">
                <Link to="/login">Login</Link>
                <Link to="/registration">Register</Link>
            </div>

    </div>
    )
}

export default main

