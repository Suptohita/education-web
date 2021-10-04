import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div  className='mt-5 pt-5 pb-5 w-85 mx-5 text-danger text-center border border-3 rounded-3'>
            <h1>Not Found</h1>
            <br />
            <span className='fs-1 bg-danger w-85 rounded'>😒😒</span>
            <br />
            <Link to='/home'><button className='btn btn-dark mt-3'>Back To Home</button></Link>
            
        </div>
    );
};

export default NotFound;