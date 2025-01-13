import React, { useEffect, useMemo, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import api from '../Api/apiUrl'

const Cart = () => {
    // const order = useFetch('/orderList');
    const [order, setOrder] = useState([]);
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
    const cartDelete = async(id) => {
        await api.delete(`/orderList/${id}`)
    }
    const priceList = order.map((item) => item.price*item.quantity);
    var totalCost = 0;
    for (let i = 0; i < priceList.length; i++) {
        totalCost = totalCost + priceList[i];
    }
    console.log(totalCost);
  return (
    <main className='container py-3'>
        <h2 className="text-secondary border-bottom border-3 border-secondary">Cart</h2>
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
                    {order.map((item, index)=>(
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
    </main>
  )
}

export default Cart