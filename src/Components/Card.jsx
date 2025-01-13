import React, { useState } from 'react'

const Card = ({item, itemOrder, category, changeFav}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        const num = count - 1
        if (num <0) {
            setCount(0)
        } else {
            setCount(num)
        }
    }
  return (
    <div className="card position-relative">
        <div className="card-img text-center h-50 overflow-hidden p-0">
            <img src={item.Pic} alt="" className='card-image'/>
            {item.fav ? <span className='position-absolute top-0 end-0' onClick={() => changeFav(item.id, false, category)}>❤</span> : <span className='position-absolute top-0 end-0' onClick={() => changeFav(item.id, true, category)}>🤍</span>}
        </div>
        <div className="card-header">
            <h4 className='text-center'>{item.name}</h4>
        </div>
        <div className="card-body">
            <p>{item.ftype==="Veg" ? <span className='badge bg-success'>{item.ftype}</span> : <span className='badge bg-danger'>{item.ftype}</span>}</p>
            <p className="card-text">Greate way to make your order to delicious food to cart</p>
            <p className='h5'>Price : <span className="badge bg-success">{item.price}</span></p>
        </div>
        <div className="card-footer position-absolute bottom-0 w-100 d-flex gap-2 justify-content-between p-2">
            <div className="d-flex">
                <button className="btn btn-warning" onClick={decrement}>-</button>
                <input type="number" className='border border-0 text-center count-input form-control' readOnly value={count} onChange={(e) => e.target.value}/>
                <button className="btn btn-warning" onClick={increment}>+</button>
            </div>
            <button className="btn btn-success w-50" onClick={() => itemOrder(category, item.id, count)}>Order</button>
        </div>
    </div>
  )
}

export default Card