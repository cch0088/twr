import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {

return(
    <div id="nav-container">
        <div className="navigation">
            <NavLink to="/">News</NavLink>
            <NavLink to="/">Guides</NavLink>
            <NavLink to="/">Store</NavLink>
            <NavLink to="/">Community</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Contact Us</NavLink>
            <NavLink to="/">Our Vendors</NavLink>
            <NavLink to="/">Terms of Use</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>
        </div>
     </div>
    )
}

export default NavBar;
