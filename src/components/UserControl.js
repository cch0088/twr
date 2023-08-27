import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/User';
import Modal from "./Modal";

function UserControl() {

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    function handleLogout() {
        // const API = props.API + "/logout";
        // const API_OPT = {
        //     mode: 'cors',
        //     credentials: 'include',
        //     method: 'DELETE'
        // };
        dispatch(logout());
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
