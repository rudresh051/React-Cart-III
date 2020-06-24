import React from 'react';

function ProductDashBoard(props) {
    console.log(props)
    return (
        <div>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <img src={props.image} />
                <button onClick = {()=>props.handleClick(props.id)}>Add</button>
        </div>
    );
}

export default ProductDashBoard;