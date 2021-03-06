import React from 'react';
import { useParams } from 'react-router-dom'
import fackData from '../../fakeData'
import Products from '../Header/Products/Products';
   
const ProductDetail = () => {
    let {productKey} = useParams()
    const product = fackData.find(pd => pd.key === productKey)
    console.log(product);
    return (
        <div>
            <h1>your products detail  </h1>

            <Products showAddToCard={false} products={product}></Products>     
         
        </div>
    );
};

export default ProductDetail;