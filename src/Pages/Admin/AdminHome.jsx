import React from 'react'

const AdminHome = ({products, order, user, contact, booking}) => {
    const Product = products.length;
    const Order = order.length;
    const User = user.length;
    const Contact = contact.length;
    const Booking = booking.length;
  return (
    <main>
        <h2 className="text-secondary border-bottom border-2 p-2">Home Page</h2>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h3 className="bg-info d-flex justify-content-center align-items-center p-4 rounded-4"><span className="badge bg-success me-2">{Product}</span> Category</h3>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h3 className="bg-info d-flex justify-content-center align-items-center p-4 rounded-4"><span className="badge bg-success me-2">{Order}</span> Orders</h3>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h3 className="bg-info d-flex justify-content-center align-items-center p-4 rounded-4"><span className="badge bg-success me-2">{User}</span> User</h3>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h3 className="bg-info d-flex justify-content-center align-items-center p-4 rounded-4"><span className="badge bg-success me-2">{Contact}</span> Contact</h3>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h3 className="bg-info d-flex justify-content-center align-items-center p-4 rounded-4"><span className="badge bg-success me-2">{Booking}</span> Booking</h3>
                </div>
            </div>
        </div>
    </main>
  )
}

export default AdminHome