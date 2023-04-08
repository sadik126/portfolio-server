import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Topsection.css';

const Topsection = () => {
    return (
        <>
            <section className="sectionbanner" style={{ marginTop: '7rem' }}>

                <div className="topSectionoverlay">

                    <Container className='text-center'>

                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row>

                                    <Col>
                                        <h1>100</h1>
                                        <h4>Total projects</h4>
                                        <hr className='w-25' style={{ color: 'white' }} />
                                    </Col>
                                    <Col>
                                        <h1>100</h1>
                                        <h4>Total clients</h4>
                                        <hr className='w-25' style={{ color: 'white' }} />
                                    </Col>
                                </Row>

                            </Col>
                            <Col lg={4} md={6} sm={12}>

                            </Col>
                        </Row>
                    </Container>



                </div>



            </section>


        </>
    );
};

export default Topsection;