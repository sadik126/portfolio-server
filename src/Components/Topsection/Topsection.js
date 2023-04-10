import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Topsection.css';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Topsection = () => {
    const [count, setCount] = useState(false)
    return (
        <>
            <section className="sectionbanner" style={{ marginTop: '7rem' }}>

                <div className="topSectionoverlay">

                    <Container className='text-center'>

                        <Row style={{ marginTop: '5%' }}>
                            <Col lg={8} md={6} sm={12}>
                                <Row>

                                    <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}></ScrollTrigger>

                                    <Col>
                                        <h1 className='countnumber'>{count && <CountUp delay={0.2} end={15.6} duration={0.5} scrollSpyDelay={1000} scrollSpyOnce={true}></CountUp>}</h1>
                                        <h4 className='counttitle'>Total projects</h4>
                                        <hr className='w-25' style={{ color: 'white', margin: '5px auto' }} />
                                    </Col>
                                    <Col>
                                        <h1 className='countnumber'>{count && <CountUp delay={0.2} end={100} duration={0.5} scrollSpyDelay={1000} scrollSpyOnce={true}></CountUp>}</h1>
                                        <h4 className='counttitle'>Total clients</h4>
                                        <hr className='w-25' style={{ color: 'white', margin: '5px auto' }} />
                                    </Col>
                                </Row>

                            </Col>
                            <Col lg={4} md={6} sm={12}>

                                <Card style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'left' }}>How I Work</Card.Title>
                                        <Card.Text>
                                            <p style={{ textAlign: 'left' }}> <FontAwesomeIcon style={{ color: '#00adff' }} icon={faCircleCheck} /> Requirement Gathering</p>
                                            <p style={{ textAlign: 'left' }}> <FontAwesomeIcon style={{ color: '#00adff' }} icon={faCircleCheck} />System analysis</p>

                                            <p style={{ textAlign: 'left' }}> <FontAwesomeIcon style={{ color: '#00adff' }} icon={faCircleCheck} />Coding Testing</p>

                                            <p style={{ textAlign: 'left' }}> <FontAwesomeIcon style={{ color: '#00adff' }} icon={faCircleCheck} />Implimentation</p>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </Container>



                </div>



            </section>


        </>
    );
};

export default Topsection;