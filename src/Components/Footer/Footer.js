import React from 'react'
import ContactUs from '../ContactUs/ContactUs';
import './Footer.css'

class Footer extends React.Component{

    constructor(props){
        super();
        this.state={
            email:''
        }
    }
    render(){
        return(
            <div className="footer">
                <ContactUs/>
                <div className="footer-container">
                    
                </div>
            </div>
        )
    }
}

export default Footer;