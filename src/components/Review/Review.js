import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import RiviewItems from '../RiviewItems/RiviewItems'

const Review = () => {

   const [cart, setCart] = useState([]);
   
    useEffect(() => {
        //  cart
        const savedCart = getDatabaseCart()
        const productkeys = Object.keys(savedCart);
          

      const cartProduct = productkeys.map(key => {
          const  product = fakeData.find(pd => pd.key === key)
          product.quantity = savedCart[key]
          return product;
      })
           setCart(cartProduct);
    },[])
    return (
        <div>
            <h1>cart items: {cart.length}</h1>
           {
               cart.map(pd =>  <RiviewItems key={pd.key} product={pd}></RiviewItems>)
           }
        </div>

    );
};

export default Review;