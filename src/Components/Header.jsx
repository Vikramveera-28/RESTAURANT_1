import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='mb-5'>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fixed navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item"><NavLink className="nav-link" to={'/'}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to={'/about'}>About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to={'/menu'}>Restaurant</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to={'/booking'}>Booking</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to={'/contact'}>Contact</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to={'/cart'}>Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </header>
  )
}
