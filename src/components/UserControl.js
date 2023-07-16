import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';

function UserControl(props) {

    const user = useContext(UserContext);
    const history = useHistory();

    function handleLogout() {
        props.setUser(null);

        const API = props.API + "/logout";
        const API_OPT = {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE'
        };
  
        fetch(API, API_OPT).then(history.push("/"));
    }

return (
    <div id="usercontrol">
        <span class="userbutton">🛒 Orders</span>
        <span class="userbutton">🔍 Search</span>
        {
            (user)
            ?
            <>
                <span class="userbutton">My Account</span>
                <span class="userbutton" onClick={handleLogout}>🚪 Log out {user.username}</span>
            </>
            :
            <>
                <span class="userbutton">🆕 Sign Up</span>
                <span class="userbutton">👤 Log In</span>
            </>
        }
    </div>
    )
}
export default UserControl;

