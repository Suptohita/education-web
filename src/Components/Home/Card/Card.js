import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <div className='mx-5 px-5'>
            <h3 className='m-5 text-center'>Why Choose Us?</h3>
            <div className="row row-cols-1 text-center row-cols-md-3 g-4">

                <div className="col">
                    <div className="card" id='first-card'>
                        <div className="card-body">
                            <h1 className='text-start'>📖</h1>
                            <br />
                            <h5 className="card-title text-start">4000 <br /> Online Courses</h5>
                            <h6 className="card-text text-start fw-lighter">We Have More Than 4000 Online Courses...</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" id='second-card'>
                        <div className="card-body">
                            <h1 className='text-start'>🏢</h1>
                            <br />
                            <h5 className="card-title text-start">Job Placement <br /> Support</h5>
                            <h6 className="card-text text-start fw-lighter">You'll get best Job Support after finishing corse...</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" id='third-card'>
                        <div className="card-body">
                            <h1 className='text-start'>🪧</h1>
                            <br />
                            <h5 className="card-title text-start">Lifetime<br /> Slack Chat Support</h5>
                            <h6 className="card-text text-start fw-lighter">You'll get help for lifetime from us...</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;