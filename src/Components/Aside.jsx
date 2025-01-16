import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Aside = ({logOut}) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <main className='row'>
        <div className="col-2 d-none d-md-block">
            <aside className='h-100 text-bg-dark border border-1 position-relative'>
                <h3 className="text-light text-center pt-2">Dashboard</h3>
                <hr className='border border-light border-1'/>
                <nav className='d-flex flex-column justify-content-start position-relative ps-4'>
                    <ol className='nav nav-pills flex-column'>
                        <li className="nav-item"><Link className='nav-link text-light' to={'/admin'}>Home</Link></li>
                        <li className="nav-item"><Link className='nav-link text-light' to={'/admin/user'}>Users</Link></li>
                        <li className="nav-item"><Link className='nav-link text-light' to={'/admin/contacts'}>Contacts</Link></li>
                        <li className="nav-item"><Link className='nav-link text-light' to={'/admin/bookings'}>Bookings</Link></li>
                    </ol>
                </nav>
                <ol className='nav mt-auto position-absolute bottom-0 ps-4'>
                    <li className="nav-item"><Link className='nav-link text-light' to={'/'} onClick={logOut}>Log out</Link></li>
                </ol>
            </aside>
        </div>
        <div className="col-10">
            <Button variant="primary" className="d-md-none" onClick={handleShow}>
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose} className="d-md-none" responsive="md">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dashboard</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <aside className='h-100 position-relative'>
                    <nav className='d-flex flex-column justify-content-start position-relative ps-4'>
                        <ol className='list-group list-group-flush flex-column'>
                            <li className="list-group-item"><Link className='nav-link text-secondary' to={'/admin'}>Home</Link></li>
                            <li className="list-group-item"><Link className='nav-link text-secondary' to={'/admin/user'}>Users</Link></li>
                            <li className="list-group-item"><Link className='nav-link text-secondary' to={'/admin/contacts'}>Contacts</Link></li>
                            <li className="list-group-item"><Link className='nav-link text-secondary' to={'/admin/bookings'}>Bookings</Link></li>
                        </ol>
                    </nav>
                    <ol className='nav mt-auto position-absolute bottom-0 ps-4'>
                        <li className="nav-item"><Link className='nav-link text-secondary' to={'/'} onClick={logOut}>Log out</Link></li>
                    </ol>
                </aside>
            </Offcanvas.Body>
            </Offcanvas>
            <Outlet />
        </div>
    </main>
  )
}