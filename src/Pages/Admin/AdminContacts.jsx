import React from 'react'

const AdminContacts = ({contact, userContactDetails}) => {
  return (
    <main>
        <h2 className="text-secondary border-bottom border-2 p-2">Contacts Page</h2>
        <div className="table-responsitive container">
            <table className="table table-hover table-bordered">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Sl. no.</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map((user, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.message}</td>
                            <td><button className="btn btn-danger w-100" onClick={()=>userContactDetails(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default AdminContacts