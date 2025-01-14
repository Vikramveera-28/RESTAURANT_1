import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = ({userName, setUserName,userPassword, setUserPassword,userLoggIn}) => {
  return (
    <main className='container'>
        <h3 className="text-secondary border-bottom border-secondary border-3 my-3">LogIn Page</h3>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username" className="form-label">UserName :</label>
            <input
                type="text"
                id="userName"
                className="form-control"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
            />
            <label htmlFor="username" className="form-label">Password :</label>
            <input
                type="password"
                id="userPassword"
                className="form-control"
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
            />
            <input type="submit" value="Submit" onClick={userLoggIn} className="btn btn-primary my-3" />
        <span className='ms-3'>New User? <Link to={'/register'}>Create Accound</Link></span>
        </form>
    </main>
  )
}

export default LogIn