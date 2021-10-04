import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Service from './Service/Service';
import Card from './Card/Card'


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Card></Card>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;