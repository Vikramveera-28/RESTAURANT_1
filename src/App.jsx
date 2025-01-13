import React, { Suspense, useState, useEffect } from 'react'
import './App.css'
import { Footer, Header, Loading } from './Components/Index'
import { Route, Routes } from 'react-router-dom'
import useFetch from './Hooks/useFetch'
const Home = React.lazy(() => import('./Pages/Home'))
const About = React.lazy(() => import('./Pages/About'))
const Contact = React.lazy(() => import('./Pages/Contact'))
const  Menu = React.lazy(() => import('./Pages/Menu'))
const  Booking = React.lazy(() => import('./Pages/Booking'))
const  Cart = React.lazy(() => import('./Pages/Cart'))
import api from './Api/apiUrl'

function App() {
  const products = useFetch("/products");
  const [order, setOrder] = useState();

  useEffect(() => {
    const fetchData = async() => {
        try {
            const response = await api.get("/orderList");
            setOrder(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    fetchData()
  }, [order])

  const itemOrder = async(category, id, count) => {
    if (count > 0 ) {
      const list = products.filter(item => Object.keys(item)[0] === category)[0][category]
      const listItem = list.find(item => item.id === id);
      const Id = order.length ? Number(order[order.length - 1].id)+1 : 1;
      const Name = listItem.name;
      const Price = listItem.price;
      const FType = listItem.ftype;
      const Image = listItem.Pic;
      
      const newItem = {id:String(Id), name:Name, pic:Image, ftype:FType, price:Price, quantity:count}
      const response = await api.post('/orderList', newItem)
      setOrder(response.data);
      console.log(order);
    } else {
      alert("Enter your item quantity");
    }
  }
  const changeFav = async(id, fav, category) => {
    const list = products.filter(list => Object.keys(list)[0] === category)[0][category]
    const item = list.find(item => item.id === id);
    const Id = item.id;
    const Name = item.name;
    const Shop = item.shop;
    const Ftype = item.ftype;
    const Price = item.price;
    const Image = item.Pic;
    const Fav = fav;

    const newItem = {id:Id, name:Name, shop:Shop, ftype:Ftype, price:Price, Pic:Image, fav:Fav}
    // const response = await api.put(`/orderList/${id}`, newItem)
    // setOrder(response.data)
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/menu' element={<Menu products={products} itemOrder={itemOrder} changeFav={changeFav}/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/Booking' element={<Booking />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
      </Suspense>
    <Footer />
    </>
  )
}

export default App
