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
                localStorage.setItem('token',res.data.token);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };
    render(){
        return (
            <> 
          
            </>
        )
    }
}