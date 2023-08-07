import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from '../App';
import Modal from "./Modal";

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

    function showModal() {
        <Modal />
    }

return (
    <div id="usercontrol">
        <span className="userbutton">🛒 Orders</span>
        <span className="userbutton">🔍 Search</span>
        {
            (user)
            ?
            <>
                <span className="userbutton">My Account</span>
                <span className="userbutton" onClick={handleLogout}>🚪 Log out {user.username}</span>
            </>
            :
            <>
                <span className="userbutton">🆕 Sign Up</span>
                <span className="userbutton" onClick={showModal}>👤 Log In</span>
            </>
        }
    </div>
    )
}
export default UserControl;

