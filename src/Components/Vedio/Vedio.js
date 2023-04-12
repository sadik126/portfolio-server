import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { BigPlayButton, Player } from 'video-react';
// npm install video-react

import './Vedio.css';

const Vedio = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Row>
                    <Col className='vediocard' lg={12} sm={12} md={12}>
                        <div>
                            <p className='vediotitle'>How I do</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat saepe nostrum, mollitia consequuntur enim blanditiis eveniet vel quis quibusdam maxime ipsum quam, ab tempore quidem corporis? Hic, expedita mollitia.</p>
                            <p><FontAwesomeIcon onClick={handleShow} className='playbtn' style={{ color: '#00adff' }} icon={faPlay} /></p>


                        </div>

                    </Col>
                </Row>
            </Container>


            <Modal size='lg' show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>

                    <Player poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                        <BigPlayButton position="center" />
                    </Player>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

        </>
    );
};

export default Vedio;