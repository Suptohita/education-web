import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header p-3'>
            <h1>Edu.xd</h1>
            
            <Link className='nav-item' to='/home'>
                <h6>Home</h6>
            </Link>

            <Link className='nav-item' to='/services'>
                <h6>Service</h6>
            </Link>

            <Link className='nav-item' to='teachers'>
                <h6>Teachers</h6>
            </Link>

            <Link className='nav-item' to='about'>
                <h6>About</h6>
            </Link>
        </div>
    );
};

export default Header;