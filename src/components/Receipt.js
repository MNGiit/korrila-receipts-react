import React from 'react';

function Receipt(props) {
    return (
        <>
            {console.log("props", props)}
            <h2 className=""></h2>
            <div>Receipt</div>
            Name: {props.receiptOne.person} <br/>
            Order: {props.receiptOne.order.main} <br/>
            <ul>
                <li>{props.receiptOne.order.protein}</li>
                <li>{props.receiptOne.order.rice}</li>
                <li>{props.receiptOne.order.sauce}</li>
            </ul>
            Toppings:
            <ul>
                <li>{props.receiptOne.order.toppings[0]}</li>
                <li>{props.receiptOne.order.toppings[1]}</li>
            </ul>
            Drink: {props.receiptOne.order.drink} <br/>
            Cost: {props.receiptOne.order.cost} <br/>
            {props.receiptOne.person === true ? "This custom has paid." : "This customer has not paid yet."} <br/>
        </>
    )
}

export default Receipt;