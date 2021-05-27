import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import API from './API/api.js'
import {
    NavLink,
  } from "react-router-dom";

  
export default class Register extends Component{
    state = {
        email: '',
        password:'',
        confirmPassword:'',
        checked:false,
        err:''
      }
      
      handleCheck = event => {
        this.setState((state) => ({
            checked: !state.checked 
          }));
          console.log(this.state.checked)
      }

    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };

        API.post(`users`, { user })
          .then(res => {
                if(this.password === this.confirmPassword){
                    console.log('update');
                    localStorage.setItem(this.email,JSON.stringify(user));
                    console.log(res);
                }
          })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='login_div'>
                    <div className='logins'>
                        <div className='login_row_first'> 
                            <div className='sign_div_text'>
                                <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/login" className='spam_link'>Sign in</NavLink></span>
                                <span><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/register" className='spam_link'>Sign up</NavLink></span>
                            </div>
                            <div className='forgot_div'> <NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/forgot" className='spam_link'>Forgot</NavLink></div>
                        </div>
                        <div className='login_row_second'>
                            <TextField id="outlined-basic" name='name' onChange={e => this.email = e.target.value} className='register_input' label="Email" variant="outlined" />
                            <TextField id="outlined-basic" name='password' onChange={e => this.password = e.target.value} className='register_input' label="Password" variant="outlined" />
                            <TextField id="outlined-basic" name='confirmPassword' onChange={e => this.confirmPassword = e.target.value} className='register_input' label="Repeat Password" variant="outlined" />
                            <FormGroup row className='checbox'>
                                <FormControlLabel control={<Checkbox name="checked" onChange={this.handleCheck} />} label="By creating an account you agree to our Terms of Service and Privacy Policy" />
                            </FormGroup>
                            <button disabled={!this.state.checked} className='register_button' onClick={()=>{console.log(this.state.checked)}}>
                                Sign up
                            </button>   
                        </div>
                    </div>
                </div>
            </form>    
        )
    }
}