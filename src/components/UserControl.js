import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/User';
import Modal from "./Modal";

function UserControl(props) {

    const user = useSelector((state) => state.user.value);
    const history = useHistory();

    const dispatch = useDispatch();

    function handleLogout() {
        props.setUser(null);

        const API = props.API + "/logout";
        const API_OPT = {
            mode: 'cors',
            credentials: 'include',
            method: 'DELETE'
        };

        dispatch(logout());
  
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
            (user.name === '')
            ?
            <>
                <span className="userbutton">🆕 Sign Up</span>
                <span className="userbutton" onClick={showModal}>👤 Log In</span>
            </>
            :
            <>
                <span className="userbutton">My Account</span>
                <span className="userbutton" onClick={handleLogout}>🚪 Log out {user.name}</span>
            </>
        }
    </div>
    )
}
export default UserControl;

