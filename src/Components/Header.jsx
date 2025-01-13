import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export const Header = () => {
  return (
    <header className='mb-5'>
        <Navbar expand="md" className="bg-dark">
            <Container>
            <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/'}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/about'}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/menu'}>Restaurant</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/booking'}>Booking</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/contact'}>Contact</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/cart'}>Cart</NavLink></li>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </header>
  )
}
