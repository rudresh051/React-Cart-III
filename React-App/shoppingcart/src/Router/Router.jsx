import React from "react"
import {Route} from "react-router-dom"
import Home from "../Components/Home"
import About from "../Components/About"
import Login from "../Components/Login"
import Cart from "../Components/Cart"



export default class Routes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <Route path="/" exact component ={Home} />
                <Route path="/about"  component ={About} />
                <Route path="/login" exact component={Login}/>
                <Route path="/cart" exact component={Cart}/>
            </React.Fragment>
        )
    }
}