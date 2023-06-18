import { NavLink } from "react-router-dom";
import React from "react";

function NavBar() {

return(
    <div id="navigation">
        <NavLink to="/">A</NavLink>
        <NavLink to="/">B</NavLink>
        <NavLink to="/">C</NavLink>
        <NavLink to="/">D</NavLink>
     </div>
    )
}

export default NavBar;