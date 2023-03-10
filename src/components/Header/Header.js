import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import icon from '../../img/icon/1.png';

const Header = () => {
    const { user, logOut } = useAuth();

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
                        <Navbar.Brand>
                            <div className='d-flex align-items-center'>
                                <img src={icon} alt="" />
                                <h3 className='text-warning px-2'><b>Spten Dental Care</b></h3>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-start">
                            <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/specialistDoctors">Specialist Doctors</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/about">About Us</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/blog">Blog</NavLink>
                            <NavLink activeStyle={activeStyle} style={style} to="/faq">FAQ</NavLink>

                            {user.displayName ?
                                <Button onClick={logOut} variant="light">Logout</Button>
                                : <NavLink activeStyle={activeStyle} style={style} to="/login">Login</NavLink>
                            }

                            < Navbar.Text >
                                {<a href="#login">{user?.displayName ? user?.displayName : ''}</a>}
                            </Navbar.Text>

                            {user.displayName ?
                                < Navbar.Brand >
                                    <img
                                        src={user?.photoURL ? user?.photoURL : ''}
                                        width="30"
                                        height="30"
                                        border-radius="50%"
                                        className="d-inline-block align-top"
                                        alt=""
                                    />
                                </Navbar.Brand> : ''}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;