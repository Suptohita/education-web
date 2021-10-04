import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h4 className='mb-4'><u>Company</u></h4>
                <h6>About Us</h6>
                <h6>Blog</h6>
                <h6>Contact</h6>
            </div>

            <div>
                <h4 className='mb-4'><u>Links</u></h4>
                <h6>Courses</h6>
                <h6>Events</h6>
                <h6>Gallery</h6>
            </div>
            <div>
                <h4 className='mb-4'><u>Supports</u></h4>
                <h6>Forums</h6>
                <h6>Language packs</h6>
                <h6>Release Status</h6>
            </div>
            <div>
                <container>
                    <h4 className='mb-3'>Become a Teacher</h4>
                    <input placeholder='Email' type="text" />
                    <button className='btn btn-warning mx-2'>Submit</button>
                    <br />
                    <h6 className='mt-3'>©️ Copyright Reserved</h6>
                </container>
            </div>
        </div>
    );
};

export default Footer;