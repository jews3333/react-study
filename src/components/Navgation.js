import React from 'react';
import '../styles/Navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div id="navigation">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}

export default Navigation;