import React, { Component } from 'react';
import { Router,Redirect } from 'react-router-dom';
import Routes from "../Router/Router";
import Navbar from './Navbar'

class MainApplication extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartItem:[],
            users:[
                {
                    username:"admin",
                    password:"admin"
                }
            ],
            isAuth:false
        }
    }

   isAuthenticated=()=>{
       if(this.state.isAuth){
           return true
       }else{
           return false
       }

   }
    checkUser = ({username,password})=>{
        let flag = false;
        this.state.users.forEach(user=>{
            if(user.username===username && user.password === password){
                flag= true
            }
        });
        this.setState({
            isAuth:true
        })
        if(flag){
            alert('user is logged in')
        }
        return flag
    }

    // add to cart function

    addTocart=( product )=>{
        if(!this.isAuthenticated()){
            alert("login please")
        }
        let cart = [...this.state.cartItem]
        let id = product.id

        let item = {
            ...product,
            qty:1
        }

        // if there is same item
        let sameItem = false;
        for(let i =0;i<cart.length;i++){
            if(cart[i].id === id){
                sameItem= true
                cart[i].qty++
                this.setState({
                    cartItem:cart
                })
                break
            }
        }
        if(!sameItem){
            this.setState({
                cartItem:[...cart,item ]
            })
        }
    }

    getCartItem = ()=>{
        return this.state.cartItem
    }
      
    render() {
        let appData = {
            addTocart: this.addTocart,
            getCartItem:this.getCartItem,
            checkUser:this.checkUser,
            isAuthenticated:this.isAuthenticated
        }

        return (
            <div>
                <Navbar />
                <Routes app = {appData} />
            </div>
        )
    }
}

export default MainApplication;