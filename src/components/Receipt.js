import React from 'react';

function Receipt(props) {
    return (
        <>
            <h2 className=""></h2>
            <div>Receipt</div>
            Name: {props.receiptOne.person} <br/>
            Order: {props.receiptOne.order.main} <br/>
            <ul>
                <li>{props.receipt.order.protein}</li>
                <li>{props.receipt.order.rice}</li>
                <li>{props.receipt.order.sauce}</li>
            </ul>
            Toppings:
            <ul>
                <li>{props.receipt.order.toppings[0]}</li>
                <li>{props.receipt.order.toppings[1]}</li>
            </ul>
            Drink: {props.receipt.order.drink} <br/>
            Cost: {props.receipt.order.cost} <br/>
            {props.receipt.person === true ? "This custom has paid." : "This customer has not paid yet."} <br/>
        </>
    )
}

export default Receipt;