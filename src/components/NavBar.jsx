import { NavLink } from "react-router-dom";

function NavBar() {

return(
    <div id="nav-container">
        <div className="navigation">
            <NavLink to="/news">News</NavLink>
            <NavLink to="/guides">Guides</NavLink>
            <NavLink to="/store">Store</NavLink>
            <NavLink to="/community">Community</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/vendors">Our Vendors</NavLink>
            <NavLink to="/terms">Terms of Use</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
        </div>
     </div>
    )
}

export default NavBar;
