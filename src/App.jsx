import React, { Suspense, useState, useEffect } from 'react'
import './App.css'
import { Aside, Footer, Header, Loading } from './Components/Index'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useFetch from './Hooks/useFetch'
const Home = React.lazy(() => import('./Pages/Home'))
const About = React.lazy(() => import('./Pages/About'))
const Contact = React.lazy(() => import('./Pages/Contact'))
const  Menu = React.lazy(() => import('./Pages/Menu'))
const  Booking = React.lazy(() => import('./Pages/Booking'))
const  Cart = React.lazy(() => import('./Pages/Cart'))
const Login = React.lazy(() => import('./Pages/SignIn_Pages/LogIn'))
const Register = React.lazy(() => import('./Pages/SignIn_Pages/Register'))
const AdminHome = React.lazy(() => import('./Pages/Admin/AdminHome'))
const AdminUser = React.lazy(() => import('./Pages/Admin/AdminUser'))
const AdminContacts = React.lazy(() => import('./Pages/Admin/AdminContacts'))
const AdminBookings = React.lazy(() => import('./Pages/Admin/AdminBookings'))
import api from './Api/apiUrl'

function App() {
  // User
  const [user, setUser] = useState([])
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  // User Register
  const [userRegisterName, setUserRegisterName] = useState('')
  const [userRegisterPassword1, setUserRegisterPassword1] = useState('')
  const [userRegisterPassword2, setUserRegisterPassword2] = useState('')
  // User Logged In
  const [userLogged, setUserLogged] = useState([])
  // Products
  const products = useFetch("/products");
  const [order, setOrder] = useState([]);
  // Contact
  const [contact, setContact] = useState([])
  // Booking
  const [booking, setBooking] = useState([])
  // Navigation
  const navigate = useNavigate()

  // Fetch User
  useEffect(() => {
    const fetchUser = async() => {
        try {
            const response = await api.get("/user");
            setUser(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchUser()
  }, [user])

  // Fetch UserLogged In
  useEffect(() => {
    const fetchUserLogged = async() => {
        try {
            const response = await api.get("/userLogged");
            setUserLogged(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchUserLogged()
  }, [userLogged])

  // Fetch Order
  useEffect(() => {
    const fetchOrder = async() => {
        try {
            const response = await api.get("/orderList");
            setOrder(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchOrder()
  }, [order])

  // Fetch Contact
  useEffect(() => {
    const fetchContact = async() => {
        try {
            const response = await api.get("/contactDetails");
            setContact(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchContact()
  }, [contact])

  // Fetch Booking
  useEffect(() => {
    const fetchBooking = async() => {
        try {
            const response = await api.get("/bookingList");
            setBooking(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchBooking()
  }, [booking])

  // User LogIn Fuction
  const userLoggIn = async() => {
    if (userName === "admin") {
      if (userPassword === "admin01") {
        navigate('/admin')
      } else {
        alert("Admin Password Invalid")
      }
    } else {
      const User = user.find(user => user.userName === userName)
      if (User) {
        if (User.password === userPassword) {
          try {
            const Id = 1;
            const Name = User.userName;
            const Pass = User.password;
            const newUser = {id:Id, userName:Name, password:Pass};

            const response = await api.put(`/userLogged/${Id}`, newUser)
            setUserLogged(response.data)
            navigate('/home');
          } catch (err) {
            console.log(err.message);
          }
        } else {
          alert("Password is Invalid...")
        }
      } else {
        alert("UserName is Invalid...")
      }
    }
  }

  // User Register Function
  const userRegisterSubmit = async() => {
    if (userRegisterPassword1 === userRegisterPassword2) {
      try {
        const Id = user.length ? Number(user[user.length-1].id)+1 : 1;
        const Name = userRegisterName;
        const Pass = userRegisterPassword1;
  
        const newUser = {id:String(Id), userName:Name, password:Pass}
        const response = await api.post('/user', newUser)
        setUser(response.data)
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Password are mismatch")
    }
  }

  // Order Placed Function
  const itemOrder = async(category, id, count) => {
    if (count > 0 ) {
      const list = products.filter(item => Object.keys(item)[0] === category)[0][category]
      const listItem = list.find(item => item.id === id);
      const Id = order.length ? Number(order[order.length - 1].id)+1 : 1;
      const UserName = userLogged[0]?.userName;
      const Name = listItem.name;
      const Price = listItem.price;
      const FType = listItem.ftype;
      const Image = listItem.Pic;
      
      const newItem = {id:String(Id), userName:UserName,name:Name, pic:Image, ftype:FType, price:Price, quantity:count}
      const response = await api.post('/orderList', newItem)
      setOrder(response.data);
    } else {
      alert("Enter your item quantity");
    }
  }

  // Delete User List
  const userDelete = async(id) => {
    try {
      await api.delete(`/user/${id}`)
    } catch (err) {
      console.log(err.message)
    }
  }

  // Get all Contact List
  const userContactDetails = async(id) => {
    try {
      await api.delete(`/contactDetails/${id}`)
    } catch (err) {
      console.log(err.message)
    }
  }

  // Get all Contact List
  const userBookingDetails = async(id) => {
    try {
      await api.delete(`/bookingList/${id}`)
    } catch (err) {
      console.log(err.message)
    }
  }

  // Change favate item
  const changeFav = async(id, fav, category) => {
    // const list = products.filter(list => Object.keys(list)[0] === category)[0][category]
    // const item = list.find(item => item.id === id);
    // const Id = item.id;
    // const Name = item.name;
    // const Shop = item.shop;
    // const Ftype = item.ftype;
    // const Price = item.price;
    // const Image = item.Pic;
    // const Fav = fav;

    // const newItem = {id:Id, name:Name, shop:Shop, ftype:Ftype, price:Price, Pic:Image, fav:Fav}
    // const response = await api.put(`/orderList/${id}`, newItem)
    // setOrder(response.data)
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={
                  <Login
                    userName={userName}
                    setUserName={setUserName}
                    userPassword={userPassword}
                    setUserPassword={setUserPassword}
                    userLoggIn={userLoggIn}/>
                  }
              />
              <Route path='/register' element={
                  <Register
                    RegisterName={userRegisterName}
                    setRegisterName={setUserRegisterName}
                    RegisterPassword1={userRegisterPassword1}
                    setRegisterPassword1={setUserRegisterPassword1}
                    RegisterPassword2={userRegisterPassword2}
                    setRegisterPassword2={setUserRegisterPassword2}
                    handleSubmit= {userRegisterSubmit} />
                  }
              />
              <Route path='/home' element={<Home userLogged={userLogged}/>} />
              <Route path='/about' element={<About />} />
              <Route path='/menu' element={
                  <Menu
                    products={products}
                    itemOrder={itemOrder}
                    changeFav={changeFav}/>
                  }
              />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Booking' element={<Booking />} />
              <Route path='/cart' element={<Cart order={order} userLogged={userLogged}/>} />
            </Route>
              <Route path='/admin' element={<Aside />}>
                  <Route index element={<AdminHome user={user} contact={contact} booking={booking} products={products} order={order}/>}/>
                  <Route path='user' element={<AdminUser user={user} userDelete={userDelete}/>}/>
                  <Route path='contacts' element={<AdminContacts contact={contact} userContactDetails={userContactDetails}/>}/>
                  <Route path='bookings' element={<AdminBookings booking={booking} userBookingDetails={userBookingDetails}/>}/>
              </Route>
        </Routes>
      </Suspense>
    <Footer />
    </>
  )
}

export default App
