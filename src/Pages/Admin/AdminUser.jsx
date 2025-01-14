import React from 'react'
import useFetch from '../../Hooks/useFetch'

const AdminUser = ({user, userDelete}) => {
  return (
    <main>
        <h2 className="text-secondary border-bottom border-2 p-2">Users Page</h2>
        <div className="table-responsitive container">
            <table className="table table-hover table-bordered">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Sl. no.</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                            <td><button className="btn btn-danger w-100" onClick={()=>userDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default AdminUser