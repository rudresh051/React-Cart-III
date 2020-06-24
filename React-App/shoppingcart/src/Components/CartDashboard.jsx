import React from 'react';

function CartDashBoard(props) {
    console.log(props)
    return (
        <div>
                    <div>{props.name}</div>
                    <div>{props.qty}</div>
                    <div>{props.price}</div>
                    <img src={props.image} />
        </div>
    );
}

export default CartDashBoard;