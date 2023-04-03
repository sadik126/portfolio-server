import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../../Images/computer.png';
import image2 from '../../Images/data-management.png';
import image3 from '../../Images/share.png';
import './Service.css';

const Services = () => {
    return (
        <>

            <Container style={{ marginTop: '5rem' }}>
                <h1 className='servicetitle'>MY SERVICES</h1>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className='servicecard'>
                            <img style={{ width: '35%' }} src={image1} alt="" />
                            <h1 className='servicename'>Web development</h1>
                            <p className='servicedesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia placeat consequuntur blanditiis quo quos natus velit aliquam modi, quia minima et, reiciendis harum quod, molestiae doloribus exercitationem corporis debitis?</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='servicecard'>
                            <img style={{ width: '35%' }} src={image2} alt="" />
                            <h1 className='servicename'>Web design</h1>
                            <p className='servicedesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia placeat consequuntur blanditiis quo quos natus velit aliquam modi, quia minima et, reiciendis harum quod, molestiae doloribus exercitationem corporis debitis?</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='servicecard'>
                            <img style={{ width: '35%' }} src={image3} alt="" />
                            <h1 className='servicename'>App development</h1>
                            <p className='servicedesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia placeat consequuntur blanditiis quo quos natus velit aliquam modi, quia minima et, reiciendis harum quod, molestiae doloribus exercitationem corporis debitis?</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Services;