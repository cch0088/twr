import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {

return(
    <div id="navigation">
        <NavLink to="/">Categories</NavLink>
        <NavLink to="/">Planning</NavLink>
        <NavLink to="/">Guides</NavLink>
        <NavLink to="/">Store</NavLink>
        <NavLink to="/">Community</NavLink>
     </div>
    )
}

export default NavBar;
