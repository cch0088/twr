import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

function Header() {

return (
    <div id="head-nav-bar">
        <div id="logo">
            <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        </div>
        <div id="logotext">Travel With Reason</div>
    </div>
    )
}
export default Header;
