import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Aside = () => {
  return (
    <main className='row'>
        <div className="col-2 d-none d-md-block">
            <aside className='h-100 text-bg-dark border border-1 position-relative'>
                <h2 className="text-light text-center pt-2">Dashboard</h2>
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
                    <li className="nav-item"><Link className='nav-link text-light' to={'/'}>Log out</Link></li>
                </ol>
            </aside>
        </div>
        <div className="col-10"><Outlet /></div>
    </main>
  )
}