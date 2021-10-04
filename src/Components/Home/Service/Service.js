import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css'


const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])



    return (
        <div style={{marginLeft:'50px'}}>
            <h4 className='text-center mt-5'><u>Courses</u></h4>
            {
                service.map(sr =>
                    <div className='service mt-5'>
                        <CardGroup>
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
                        </CardGroup>
                    </div>
                    )
            }
        </div>
    );
};

export default Service;