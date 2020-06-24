import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../Components/Home"
import About from "../Components/About"
import Login from "../Components/Login"
import Cart from "../Components/Cart"

export default function Routes(props){
    console.log(props)
    const { app } = props
    

        return(
            <Switch>
                <Route path="/" exact render = {(props)=><Home {...props} app={ app } />} />
                <Route path="/about"  component ={About} />
                <Route path="/login" render = {(props)=> <Login {...props} app={ app } />} />
                <Route path="/cart" render = {(props)=> <Cart {...props} app ={  app } />} />

            </Switch>
        )
    }