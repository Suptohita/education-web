import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])


    return (
        <div>
            <Header></Header>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-5 mt-5">
                {
                    teachers.map(teacher =>
                        <div className="">
                            <div>
                                <div class="col" style={{width:'450px'}}>
                                    <div class="card">
                                        <img style={{width:'150px', alignItems: 'center'}} src={teacher.image} class="card-img-top rounded-circle" alt="..."/>
                                        <div class ="card-body">
                                        <h4 class ="card-title">Name: {teacher.title}</h4>
                                        <h6>Job: {teacher.job}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Teachers;