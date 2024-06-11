import React, { useEffect } from "react";
import "./FabTourGuide.css";
import Img1 from "./Images/FabImg1.png";
import Img2 from "./Images/FabImg2.png";
import Img3 from "./Images/FabImg3.png";
import Img4 from "./Images/FabImg4.png";
import Img5 from "./Images/FabImg5.png";
import Img6 from "./Images/FabImg6.png";
import Img7 from "./Images/FabImg7.png";
import { TourGuide } from "testing-fab-lib";

export const FabTourGuide = () => {
 
    useEffect(()=>{
    TourGuide("home");
    },[])

  return (
    <div className="container">
      <div className="imageWrapper"><img src={Img1} alt="fabImg" className="imgStyle" /><button id="login-btn" className="login-button"></button></div>
      <div className="imageWrapper"><img src={Img2} alt="fabImg" className="imgStyle" /></div>
      <div className="imageWrapper"><img src={Img3} alt="fabImg" className="imgStyle" /></div>
      <div className="imageWrapper"><img src={Img4} alt="fabImg" className="imgStyle" /><button id="explore-btn" className="explore-button">Explore</button></div>
      <div className="imageWrapper"><img src={Img5} alt="fabImg" className="imgStyle" /><button id="install-btn" className="install-app">Install App</button></div>
      <div className="imageWrapper"><img src={Img6} alt="fabImg" className="imgStyle" /><button id="calci-btn" className="calci-button">Calculator</button></div>
      <div className="imageWrapper"><img src={Img7} alt="fabImg" className="imgStyle" /><span id="faq-btnn" className="faq-button">FAQ's</span></div>
    </div>
  );
};
