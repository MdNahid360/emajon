import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Products = (props) => {
    console.log(props);
    const {img, name,seller,price,star,stock}=props.products
    return (
        <div className="product">
           <div className="prd1">
               {/* <img src={props.products.img} alt=""/> */}
               <img src={img} alt=""/>
           </div>
           <div className="prd2">
                {/* <h4>{props.products.name}</h4> */}
                <h4 className="product-name">{name}</h4>
               
                <p><small>by : {seller}</small></p>
                <h5>$ {price}</h5>
                <p><small>Only {stock} left in stock order soon</small></p>
                <button className="buy"
                  onClick={() => props.addProduct(props.products)}
                ><FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
           </div>
        </div>
    );
};

export default Products;