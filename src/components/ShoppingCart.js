import React from 'react';

function ShoppingCart(props) {
    return (
        <>
            <h2 className=""></h2>
            <div>Shopping cart</div>
            {props.item}: {props.count} <br/>
        </>
    )
}

export default ShoppingCart;

// Item name - Add Button