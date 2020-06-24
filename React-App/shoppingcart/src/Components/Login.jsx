import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username : "",
            password : ""
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        const {app} = this.props
        const { username,password } = this.state

        let payload ={
            username,
            password
        }
        app.checkUser(payload)
    }


    
    render() {
        const {app} = this.props
        if(app.isAuthenticated()){
            return <Redirect to ="/" />       }
        return (
            <form onSubmit={this.handleSubmit}>
                username
                <input name="username" value = {this.state.username} onChange={this.handleChange}/>
                <br>
                </br>
                password
                <input name="password" value = {this.state.password} onChange={this.handleChange}/>
                <input type ="submit"/>
            </form>
        );
    }
}

export default Login;