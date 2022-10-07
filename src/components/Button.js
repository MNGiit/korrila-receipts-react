import React from 'react'

function Button(props) {
    return (
        <>
        <button onClick={props.changeAmount}>{props.buttons}</button>
        </>
    )
}

export default Button;