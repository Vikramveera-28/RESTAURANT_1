import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
        <h1>Page Not Found</h1>
        <Link to={'/'}>Go back to Login Page</Link>
    </main>
  )
}

export default PageNotFound