import "./HeroImg2Styles.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
    render() {
        return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>

            {this.props.showCVButton && (
                <div>
                  <a href={process.env.PUBLIC_URL + "/Reginald_Moyo_Frontend_Developer_CV.pdf"} download className="cv-button">
                    Download CV
                  </a>
                </div>
            )}
            
        </div>
    </div>
  );
    }
  
}

export default HeroImg2;