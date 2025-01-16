import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="text-bg-dark">
    <footer className="container">
        <div className="row pt-4">
        <div className="col-6 col-md-2 mb-3">
            <h5 className='text-warning'>Navigation</h5>
            <ul className="nav flex-column">
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/home'}>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/about'}>About</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/contact'}>Contact</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/cart'}>Cart</NavLink></li>
            </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
            <h5 className='text-warning'>Features</h5>
            <ul className="nav flex-column">
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/menu'}>Restaurant</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link text-light p-0" to={'/booking'}>Table Booking</NavLink></li>
            </ul>
        </div>

        <div className="col-12 col-md-6 offset-md-2 mb-3">
            <form>
            <h5 className='text-warning'>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
            </form>
        </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"/></svg></a></li>
        </ul>
        </div>
    </footer>
    </div>
  )
}
