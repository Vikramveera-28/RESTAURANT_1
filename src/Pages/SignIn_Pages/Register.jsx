import React from 'react'
import { Link } from 'react-router-dom';

const Register = ({RegisterName, setRegisterName, RegisterPassword1, setRegisterPassword1, RegisterPassword2, setRegisterPassword2, handleSubmit}) => {
  return (
    <main className='container'>
        <h3 className="text-secondary border-bottom border-secondary border-3 my-3">Register Page</h3>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="username" className="form-label">UserName :</label>
            <input
                type="text"
                id="userName"
                className="form-control"
                value={RegisterName}
                onChange={(e)=>setRegisterName(e.target.value)}
            />
            <label htmlFor="userPassword1" className="form-label">Password :</label>
            <input
                type="password"
                id="userPassword1"
                className="form-control"
                value={RegisterPassword1}
                onChange={(e)=>setRegisterPassword1(e.target.value)}
            />
            <label htmlFor="userPassword2" className="form-label">Confirm Password :</label>
            <input
                type="password"
                id="userPassword2"
                className="form-control"
                value={RegisterPassword2}
                onChange={(e)=>setRegisterPassword2(e.target.value)}
            />
            <input type="submit" value="Submit" onClick={handleSubmit} className="btn btn-primary my-3" />
            <span className='ms-3'>Already have accound? <Link to={'/'}>Log in</Link></span>
        </form>
    </main>
  )
}

export default Register;