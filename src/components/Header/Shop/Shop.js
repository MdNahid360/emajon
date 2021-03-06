import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProucts] = useState(first10);
    const [cart, setCart] = useState([])


    const addProduct = (product) =>{
         console.log('click marse', product);

    const newCart = [...cart, product];
    setCart(newCart)
    const sameProduct = newCart.filter(pd => pd.key === product.key)
    const count = sameProduct.length;
    addToDatabaseCart(product.key,count)
    }

    
    return (
        <div className="shop-container">
             <div className="product-container">
             
                    {
                        products.map(prd => <Products
                           key={prd.key}
                            showAddToCard={true}  addProduct = {addProduct}
                            products={prd}></Products>)
                    }
             </div>
             <div className="card-container">
                 <Cart cart={cart}>
                 <Link to="/review">
                      <button className="buy">Review Order</button>
                 </Link>
                 </Cart>
             </div>
        </div>
    );
};

export default Shop;