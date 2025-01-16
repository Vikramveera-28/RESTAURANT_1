import React, { useEffect, useState } from 'react';
import api from '../Api/apiUrl';
import { useNavigate } from 'react-router-dom';

const Contact = ({userLogged}) => {
  const navigate = useNavigate();
  const UserName = userLogged[0]?.userName
  useEffect(() => {
    if (!UserName){
      navigate('/')
      alert("LogIn First")
    };
  }, [UserName, navigate])
  if (!UserName) return null;
  const [contact, setContact] = useState([])
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchContact = async() => {
      try {
        const response = await api.get('/contactDetails')
        setContact(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchContact()
  }, [contact])

  const contactSubmit = async() => {
    try {
      if (name==='' || mobile==='' || email==='' || message === '') {
        alert("Fill the given form")
      } else {
        const Id = contact.length ? Number(contact[contact.length-1].id)+1 : 1;
        const Name = name;
        const Mobile = mobile;
        const Email = email;
        const Message = message;

        const newItem = {id:String(Id), name:Name, mobile:Mobile, email:Email, message:Message}
        const response = await api.post('/contactDetails', newItem)
        setContact(response.data)
        setName("")
        setMobile("")
        setEmail("")
        setMessage("")
        alert("Feedback successfully sent...")
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <main className='container'>
      <h3 className="text-secondary border-bottom border-secondary border-3 pt-3">Contact</h3>
      <div className="row mt-5">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="mobile" className="form-label">Mobile No.</label>
          <input
            type="number"
            id="mobile"
            className='form-control'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            rows="3"
            className='form-control'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <input type="submit" value="Sent" className='btn btn-primary w-100 mt-3' onClick={contactSubmit}/>
        </form>
      </div>
    </main>
  )
}
export default Contact;