import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Navber.css';

const Navber = () => {
    const [scroll, setScroll] = useState('navtitle')
    const [background, setBackground] = useState('navback')
    const [navitem, setNavitem] = useState('navitem')



    const changescroll = () => {
        if (window.scrollY > 100) {
            setScroll('navscroll')
            setBackground('navbackscroll')
            setNavitem('navitemscroll')
        }
        else if (window.scrollY < 100) {
            setScroll('navtitle')
            setBackground('navback')
            setNavitem('navitem')
        }

        // console.log('scroling')
    }


    // changescroll()


    useEffect(() => {

        window.addEventListener('scroll', changescroll)
        // changescroll()
    }, [])
    return (
        <>
            <Navbar className={background} fixed='top' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand className={scroll} href="#home">RAYHAN SADIK</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className={navitem} href="#deets">HOME</Nav.Link>
                            <Nav.Link className={navitem} href="#deets">SERVICES</Nav.Link>
                            <Nav.Link className={navitem} href="#deets">COURSES</Nav.Link>
                            <Nav.Link className={navitem} href="#deets">PORTFOLIO</Nav.Link>
                            <Nav.Link className={navitem} href="#deets">ABOUT</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navber;