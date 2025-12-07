import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                        <div>
                            <p>Jana Kotłowskiego 3/3</p>
                             <p>84-200, Wejherowo</p>
                             <p>Poland</p>
                        </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                        +48-884-877-428</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: 
                        "#fff", marginRight: "2rem"}} />
                        regimoyo@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me:</h4>
                <p>
                    I started my journey in web development with a simple curiosity about how websites work 
                    now I build them. I work with HTML, CSS, JavaScript, and frameworks like React to bring digital products to life. 
                    I’m constantly exploring new tools and best practices to improve performance and user experience
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{ color: 
                        "#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{ color: 
                        "#fff", marginRight: "1rem"}} />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer