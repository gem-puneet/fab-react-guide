import React from "react";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/json">JSON Form</Link>
        </li>
        <li>
          <Link to="/multistep">MultiStep Form</Link>
        </li> */}
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/quickTour">Quick Tour</Link>
        </li>
        <li>
          <Link to="/annmodal">Announcement Modal</Link>
        </li>
        <li>
          <Link to="/fabTour">Fab Tour</Link>
        </li>
        <li>
          <Link to="/annSlider">Announcement Carousel</Link>
        </li>
      </ul>
    </nav>
  );
};
 
export default Navbar;