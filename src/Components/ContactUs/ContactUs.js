import React from 'react'
import './ContactUs.css'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {} from 'react-router-dom'

class ContactUs extends React.Component{

    constructor(props){
        
        super();
        this.state = {
            email:'',
            phone:'',
            message:''
        }

        this.handleCancelBtn = this.handleCancelBtn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSendBtn = this.handleSendBtn.bind(this);

    }
    handleCancelBtn(){
        
        this.setState((state)=>{

            state['email'] = ''
            state['phone'] = ''
            state['message'] = ''
            return state;
        })
    }

    handleChange(event){

        const key = event.target.name;
        const value = event.target.value;
        this.setState((state)=>{
            state[key] = value;
            return state;
        })
    }

    handleSendBtn(){
        
        const data = {
            email:this.state.email,
            phone:this.state.phone,
            message:this.state.message
        }
        alert(JSON.stringify(data))

    }

    render(){

        return(
            <div className="contact-container">

                <div className="contact-heading">

                    <div className="contact-info">
                        
                        <ul>
                            <li>Collaboration</li>
                            <li>Events</li>
                            <li>Participants</li>
                            <li>Results</li>
                            <li>Prizes or Certificates</li>
                        </ul>
                        <p>Any sort of query or feedback fill up the right form section :)</p>                        
                        <div className="contact-soc-icons">

                            <a href="mailto:info@sapphirelpu.com">
                            <FaEnvelope className="contact-icon"/>
                            </a>
                               
                            <a href="https://instagram.com/sapphirelpu?igshid=1y0u0b3imcsol" rel="noreferrer" target="_blank">
                                <FaInstagram className="contact-icon" />
                            </a>

                            <a href="https://www.facebook.com/sapphirelpu/" rel="noreferrer" target="_blank">
                                <FaFacebookF className="contact-icon" />
                            </a>

                            <a href="https://www.linkedin.com/company/sapphirelpu" rel="noreferrer" target="_blank">
                                <FaLinkedinIn className="contact-icon" />
                            </a>
                        
                        </div>
                    </div>
                </div>
                
                <div className="contact-form">
                    <h1 className="contact-text">
                        Just Say hello Sapphire !!
                    </h1>
                    <div className="contact-form-item">
                        <input 
                        type="email"
                        placeholder="Your Email Address"
                        id="email"
                        name="email"
                        className="contact-input" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="contact-form-item">
                        <input 
                        type="tel"
                        placeholder="Contact Number"
                        id="phone"
                        name="phone"
                        className="contact-input" 
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="contact-form-item">
                        <textarea 
                        placeholder="Your Message here"
                        id="contact-message"
                        name="message"
                        className="contact-input" 
                        rows="8"
                        value={this.state.message}
                        onChange={this.handleChange}
                        ></textarea>
                    </div>

                    <div className="contact-form-item">
                        <button 
                        onClick={this.handleCancelBtn}
                        className="contact-btn">
                            Cancel
                        </button>
                        <button
                        onClick={this.handleSendBtn} 
                        className="contact-btn">
                            Send
                        </button>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default ContactUs
