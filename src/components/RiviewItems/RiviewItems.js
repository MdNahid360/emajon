import React from 'react';

const RiviewItems = (props) => {
    console.log(props);
    const{name,quantity} = props.product;
    return (
        <div>
            <h1>{name}</h1>
            <p>quantity : {quantity} </p>
            <br/>
            <button className="buy">Remove</button>
            <button>nahid</button>
        </div>

    );
};

export default RiviewItems;