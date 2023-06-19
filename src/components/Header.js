import { NavLink } from "react-router-dom";
import logo from '../logo.svg';

function Header() {

return (
    <div id="logo">
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        <span class="logotext">Travel With Reason</span>
    </div>
    )
}
export default Header;
