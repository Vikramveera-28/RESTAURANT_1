import React, { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import api from '../Api/apiUrl'
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({order, userLogged}) => {
  const navigate = useNavigate();
  const UserName = userLogged[0]?.userName
//   useEffect(() => {
//     if (!UserName){
//       navigate('/')
//       alert("LogIn First")
//     };
//   }, [UserName, navigate])
//   if (!UserName) return null;
    const [cart, setCart] = useState([])

    useEffect(() => {
        const UserName = userLogged[0]?.userName
        const UserOrder = order.filter(user => user.userName === UserName);
        setCart(UserOrder)
        console.log(UserOrder);
    }, [])

    const cartDelete = async(id) => {
        await api.delete(`/orderList/${id}`)
        useNotification("Cart item is delete")
    }
    const priceList = cart.map((item) => item.price*item.quantity);
    var totalCost = 0;
    for (let i = 0; i < priceList.length; i++) {
        totalCost = totalCost + priceList[i];
    }
  return (
    <main className='container mt-5'>
        <h2 className="text-secondary border-bottom border-3 border-secondary">Cart</h2>
        {cart.length>0 ? (
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className='text-center table-dark'>
                    <tr>
                        <th>Sl. No.</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Food Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Cost</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td className='text-center'><img src={item.pic} className='cart-image' alt="" /></td>
                            <td>{item.ftype}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity*item.price}</td>
                            <td><button className="btn btn-danger w-100" onClick={() => (cartDelete(item.id))}>Delete</button></td>
                        </tr>
                    ))}
                    <tr className='table-dark'>
                        <td colSpan="6" className='text-end pe-5 h4'>Total</td>
                        <td colSpan="2">{totalCost}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Your Cart is empty</h1>
                <h6><Link to={'/menu'}>Order your Food</Link></h6>
            </div>
        )}
    </main>
  )
}

export default Cart