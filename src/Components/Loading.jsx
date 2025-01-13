import React from 'react'
import '../App.css'

export const Loading = () => {
  return (
    <main className='position-relative'>
        <section className='position-absolute top-50 start-50 translate-middle'>
            <p className="display-1 text-secondary">Loading <span className='loading'></span></p>
        </section>    
    </main>
  )
}
