import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Topbanner.css'

const Topbanner = () => {
    return (
        <>
            <section className="topbanner">

                <div className="topBanneroverlay">

                    <Container className='topcontent'>
                        <Row>
                            <Col className='text-center'>
                                <h1 className='text-content'>SOFTWARE ENGINEER</h1>
                                <h4 className='text-sub-content'>Mobile and Web application</h4>
                                <Button variant='primary'>More Info</Button>
                            </Col>
                        </Row>
                    </Container>

                </div>



            </section>

        </>
    );
};

export default Topbanner;