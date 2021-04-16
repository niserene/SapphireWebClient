import React from 'react'
import ContactUs from '../ContactUs/ContactUs';
import './Footer.css'
import FooterContainer from './FooterContainer';

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

                <FooterContainer/>
            
            </div>
        )
    }
}

export default Footer;