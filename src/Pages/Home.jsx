import React from 'react'
import Image from '../assets/Images/vegetables-background.jpg';
import { Link } from 'react-router-dom';

const Home = ({userLogged}) => {
    const UserName = userLogged[0]?.userName
  return (
    <main className="container-fluid mainPage" id="homePage">
        <div className="position-relative p-5">
            <div className="row mt-5">
                <div className="col-6 ms-5 mt-5">
                    <h1 className="display-6 text-warning text-center writing">Welcome {UserName}</h1>
                    <h1 className="display-lg-6 text-light text-center mt-4" style={{fontFamily: "sans-serif"}}>
                        TASTYC<br />WORLDWISE RESTAURANT
                    </h1>
                </div>
            </div>
            <div className="row mt-5 gap-3">
                <div className="col-6 offset-1 col-md-2">
                    <Link className="btn btn-outline-light w-100" to={'/about'}>About Us</Link>
                </div>
                <div className="col-6 offset-1 col-md-2">
                    <Link className="btn btn-warning w-100" to={'/booking'}>Book a Table</Link>
                </div>
            </div>
        </div>
    </main>
  )
}
export default Home;