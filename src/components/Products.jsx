import React from 'react'
import { useDispatch } from 'react-redux'
import { addWishlist } from '../redux/slices/wishlist-slice'

const DATA = [
    {
        id: 1,
        title: "Galaxy s22 ultra",
        price: 450
    },
    {
        id: 2,
        title: "iPhone 13 pro",
        price: 550
    },
    {
        id: 3,
        title: "Redmi t9",
        price: 350
    },
]

const Products = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Products</h2>
        <input type="text" autoComplete='off' />
        {
            DATA?.map((item)=>(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <button onClick={()=> dispatch(addWishlist(item))}>like</button>
                    <hr />
                </div>
            ))
        }
    </div>
  )
}

export default Products