import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';


// get and set data from fakedb

const AllServices = () => {
    const [services, setServices] =useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])



    return (
        <div>
            <Header></Header>
        {
            services.map(sr =>
                <div className='service mt-5'>
                        <Card>
                            <Card.Img variant="top" src={sr.img} />
                            <Card.Body>
                                <Card.Title><h4 className='fs-5'>Course: {sr.name}</h4></Card.Title>
                                <h5 className='p-2 fs-6'>Technology: {sr.tecnology}</h5>
                                <br />
                                <span className='star'>⭐ {sr.rating}</span>
                                <br/>
                                <h6 className='p-3'>price: ${sr.price}</h6>
                            </Card.Body>
                        </Card>
                </div>
                )
        }
        <Footer></Footer>
    </div>
    );
};

export default AllServices;