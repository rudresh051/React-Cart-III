import React from "react"
import CartDashBoard from './CartDashboard'
import { Redirect } from "react-router-dom"

function Cart(props){

    const {app} = props
    if(!app.isAuthenticated()){
        return <Redirect to = "/login"/>
    }
    
    const cartItem = app.getCartItem()
    console.log(cartItem)
    return(
    <div>
        {cartItem.map( item => <CartDashBoard key={item.id} {...item} /> )}
    </div>
    )
}

export default Cart