import React from 'react'
import './FooterContainer.css'
class FooterContainer extends React.Component {
    
    render(){
        return(
            <div class="footer-container">
                <div class="footer-container-section">
                    
                    <div class="footer-item">
                        <h1 class="footer-item-heading">
                            Reach out to us
                        </h1>
                        <ul class="footer-item-main">
                            <li class="footer-item-unit">
                                <a href="#home" rel="tag">
                                    <i class="fa fa-map-marker footer-icon"></i>
                                    <p>
                                        Room no:205 <br/>
                                        Division of student welfare ,
                                        Lovely Professional Universiy,<br/> 
                                        Phagwara ,Punjab (India)
                                    </p>
                                </a>
                            </li>
                            <li class="footer-item-unit">
                                <a href="mailto:info@sapphirelpu.com">
                                    <i class="fa fa-envelope footer-icon"></i>
                                    <p>info@sapphirelpu.com</p>
                                </a>
                            </li>
                            <li class="footer-item-unit">
                                <a href="#call">
                                    <i class="fa fa-phone footer-icon"></i>
                                    <p>
                                    +919876543210
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-item second-item">
                        <h1 class="footer-item-heading">
                            Connect With Us
                        </h1>
                        <ul class="social-handles-list">
                            <li>
                                <a href="https://www.instagram.com/sapphirelpu/">
                                    <i class="fa fa-instagram footer-social-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sapphirelpu">
                                    <i class="fa fa-twitter footer-social-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sapphirelpu/">
                                    <i class="fa fa-facebook footer-social-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://in.linkedin.com/company/sapphirelpu">
                                    <i class="fa fa-linkedin footer-social-icon"></i>
                                </a>
                            </li>
                        </ul>
                        <h1 class="footer-item-heading">
                            Quick Links
                        </h1>
                        <ul>
                            <li class="footer-quick-link"><a href="#CodeKarona">Code Karona 3.0</a></li>
                            <li class="footer-quick-link"><a href="#about-us">About Us</a></li>
                            <li class="footer-quick-link"><a href="#join-us">Join Us</a></li>
                            <li class="footer-quick-link"><a href="#contact-us">Contact Us</a></li>
                            <li class="footer-quick-link"><a href="#events">Events Gallery</a></li>
                            <li class="footer-quick-link"><a href="#feedback">Feedback / Query</a></li>
                        </ul>
                    </div>
                    <div class="footer-item">
                        <h1 class="footer-item-heading">
                            Subscribe to our newsletter
                        </h1>
                        <div class="footer-item-form">
                            
                            <input 
                            type="text"
                            class="footer-input"
                            placeholder="Your email" />
            
                            <button class="footer-btn">
                                Subscribe
                            </button>
                        </div>
                    
                    
                    
                    
                    </div>
                
                </div>

                <div class="footer-end">
                    <p>
                        Designed and Developed by Team #Sapphire
                    </p> 
                    <p>
                        Copyright <span>&copy; 2021 </span>Sapphire Organisation 
                    </p>
                </div>
            </div>
        )
    }
}

export default FooterContainer
