import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Container }  from 'react-bootstrap'

export const Header = ({logOut, userLogged}) => {
  const UserName = userLogged[0]?.userName;
  const navigate = useNavigate();
  return (
    <header className='mb-5'>
        <Navbar expand="md" className="bg-dark">
            <Container>
            <Navbar.Brand href="#home" className='text-light'>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {UserName && (
                <Nav className="ms-auto">
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/home'}>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/about'}>About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/menu'}>Restaurant</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/booking'}>Booking</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/contact'}>Contact</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/cart'}>Cart</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/'} onClick={logOut}>Log Out</NavLink></li>
                </Nav>
              )}
              {!UserName && (
                <Nav className="ms-auto">
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/'}>Log In</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-light" to={'/register'}>Register</NavLink></li>
                </Nav>
              )}
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </header>
  )
}
