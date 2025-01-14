import React from 'react'
import Card from '../Components/Card';
import {Loading} from '../Components/Index'

const Menu = ({products, itemOrder, changeFav}) => {
  return (
    <main className='pb-2 px-5'>
      <h3 className="text-secondary border-bottom border-secondary border-3 pt-3">Menu</h3>
      {products ? (
        products.map((product, index) => {
          const category = Object.keys(product)[0];
          const items = product[category];
          return (
            <section key={index} className='my-5'>
              <p className="border rounded bg-secondary h1 py-2 ps-1 mx-2 ps-3 text-warning mb-4">{category}</p>
              <div className="row px-5">
                  {items.map((item, itemIndex) => (
                  <div key={itemIndex} className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <Card item={item} itemOrder={itemOrder} category={category} changeFav={changeFav}/>
                  </div>
                  ))}
              </div>
            </section>
          )
        })
      ) : (<Loading />)}         
    </main>
  )
}
export default Menu;