import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: "red"
    }
    const style = {
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px"
    }
    return (
        <div>
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand><h3><b>Spten Dental Care</b></h3></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact Us</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/registration">Registration</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/login">Login</NavLink>
                            <Navbar.Text>
                                Signed in as: <a href="#login">Authoi</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;