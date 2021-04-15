import React from 'react'
import Navbar from './Navbar/Nav';
import HomePage from './HomePage/HomePage';
import ContactUs from './ContactUs/ContactUs'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './MainComponent.css'

class MainComponent extends React.Component{

    render(){
        return (
            <Router>
              <Navbar/>
              <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/contact-us' exact component={ContactUs} />
              </Switch>
            </Router> 
        );
    }
}

export default MainComponent;