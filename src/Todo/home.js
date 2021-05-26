import React, {Component} from 'react';
import API from './API/api.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import Cars from './Cars.js'
import Electronics from './Electronics.js'
import Real_Estate from './Real_Estate.js'

export default class Home extends Component {
    state = {
        persons: []
      }

    componentDidMount() {
       /* const config = {
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('token')
            }
        };*/
        /*API.get('users',config).then(
            res => {
                const persons = res.data;
                this.setState({ persons });
            },
            err => {
                console.log(err);
            }
        );*/
    }

    render(){
        return(
            <>            
               <Router>
                    <div className='search_div'> 
                        <div className='margin_div_search'>
                            <div className='search_text'>
                                <span className='search_spam'><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/cars" className='spam_link'>Cars</NavLink></span>
                                <span className='search_spam'><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/" className='spam_link'>Real Estate</NavLink></span>
                                <span className='search_spam'><NavLink activeStyle={{ color: "#E5801A",textDecoration: 'underline'}} to="/electronics" className='spam_link'>Electronics</NavLink></span>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/cars" component={Cars} />
                        <Route exact path="/" component={Real_Estate} />
                        <Route path="/electronics" component={Electronics} />
                    </Switch>
                </Router> 
            </>
        )
    }
}