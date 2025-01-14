import React, { useEffect, useState } from 'react'
import api from '../Api/apiUrl'

const Booking = () => {
    const [booking, setBooking] = useState([])
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState("")
    const [count, setCount] = useState()

    useEffect(() => {
        const fetchBooking = async() => {
            try {
                const response = await api.get("/bookingList")
                setBooking(response.data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchBooking()
    }, [booking])

    const tableBooking = async() => {
        if ((name==='' || mobile==='' || email==='' || count === '')) {
            alert("Fill the given form")
        } else {
            const Id = booking.length ? Number(booking[booking.length - 1 ].id) + 1 : 1;
            const Name = name;
            const Mobile = mobile;
            const Email = email;
            const Count = count;
            const Category = document.querySelector('input[name="table"]:checked').id;

            const newItem = {id:String(Id), name:Name, mobile:Mobile, email:Email, count:Count, category:Category}
            const response = await api.post("/bookingList", newItem)
            setBooking(response.data)
            setName("")
            setMobile("")
            setEmail("")
            setCount("")
            alert("Successfully your table booked...")
        }
    }
  return (
    <main className='container'>
        <h3 className="text-secondary border-bottom border-secondary border-3 pt-3">Table Booking</h3>
        <div className="row mt-5">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    className='form-control'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label htmlFor="mobile" className="form-label">Mobile No.</label>
                <input
                    type="number"
                    id="mobile"
                    className='form-control'
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                />
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    className='form-control'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="count" className="form-label">Count</label>
                <input
                    type="number"
                    id="count"
                    className='form-control'
                    value={count}
                    onChange={(e)=>setCount(e.target.value)}
                />
                <label htmlFor="table" className="form-label">Table</label><br />
                <div className="row">
                    <div className="col-4">
                        <input type="radio" name="table" id="First" className='btn-check' />
                        <label htmlFor="First" className='btn btn-outline-secondary w-100'>First Class</label>
                    </div>
                    <div className="col-4">
                        <input type="radio" name="table" id="Second" className='btn-check' />
                        <label htmlFor="Second" className='btn btn-outline-secondary w-100'>Second Class</label>
                    </div>
                    <div className="col-4">
                        <input type="radio" name="table" id="Third" className='btn-check' />
                        <label htmlFor="Third" className='btn btn-outline-secondary w-100'>Third Class</label>
                    </div>
                </div>
                <input type="submit" value="Submit" className='btn btn-primary w-100 mt-3' onClick={tableBooking}/>
            </form>
        </div>
    </main>
  )
}

export default Booking;