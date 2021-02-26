import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProucts] = useState(first10);
    const [cart, setCart] = useState([])
    const addProduct = (product) =>{
         console.log('click marse', product);
    const newCart = [...cart, product];
    setCart(newCart)
    }

    return (
        <div className="shop-container">
             <div className="product-container">
             
                    {
                        products.map(prd => <Products
                            addProduct = {addProduct}
                            products={prd}></Products>)
                    }
             </div>
             <div className="card-container">
                 <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;