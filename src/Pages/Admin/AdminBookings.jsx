import React from 'react'

const AdminBookings = ({booking, userBookingDetails}) => {
  return (
    <main>
        <h2 className="text-secondary border-bottom border-2 p-2">Bookings Page</h2>
        <div className="table-responsitive container">
            <table className="table table-hover table-bordered">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Sl. no.</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Count</th>
                        <th>Count</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((user, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.count}</td>
                            <td>{user.category}</td>
                            <td><button className="btn btn-danger w-100" onClick={()=>userBookingDetails(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default AdminBookings