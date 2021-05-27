import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import API from './api';
import {
    NavLink,
  } from "react-router-dom";


export default class Sign_in extends Component {
    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        API.post('users', data)
        .then(res => {  
             for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                if(key === this.email){
                    const get_user = key;
                    const g = JSON.parse(localStorage.getItem(localStorage.key(key)));
                    const get_password =  g.password;
                    if(get_password === this.password){
                        console.log(get_user + " password - " + get_password);
                    }
                }
                //alert(`${key}: ${localStorage.getItem(key)}`);
              }
            })
            .catch(err => {
                console.log(err)
            })
    };
    render(){
        return (
            <> 
                <div className='login_div'>
                    <div className='logins'>
                            <div className='login_row_first'> 
                                <div className='sign_div_text'>
                                    <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/login" className='spam_link'>Sign in</NavLink></span>
                                    <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/register" className='spam_link'>Sign up</NavLink></span>
                                </div>
                                <div className='forgot_div'> <NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/forgot" className='spam_link'>Forgot</NavLink></div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className='login_row_second'>
                                    <TextField id="outlined-basic" className='login_input' label="Email" onChange={e => this.email = e.target.value}  variant="outlined" />
                                    <TextField id="outlined-basic" className='login_input' label="Password" onChange={e => this.password = e.target.value} variant="outlined" />
                                    <button className='login_button'>
                                        Sign in
                                    </button>
                                </div>     
                            </form>
                        </div>
                </div>
            </>
        )
    }
}