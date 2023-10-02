import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { logout } from '../features/UserSlice';
import Modal from './Modal';
import LoginDialog from './LoginDialog';

function UserControl() {

    const user = useSelector((state) => state.user.value);
    const modal = useSelector((state) => state.modal.value);

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
        dispatch(openModal());
    }

return (
    <div id="usercontrol">
        <span className="userbutton">🛒 Orders</span>
        <span className="userbutton">🔍 Search</span>
        {
            (user.current_user.name === '')
            ?
            <>
                <span className="userbutton">🆕 Sign Up</span>
                <span className="userbutton" onClick={showModal}>👤 Log In</span>
            </>
            :
            <>
                <span className="userbutton">👤 Account</span>
                <span className="userbutton" onClick={handleLogout}>🚪 Log Out</span>
            </>
        }
        {
            modal.show && <Modal children={<LoginDialog />}/>
        }
    </div>
    )
}
export default UserControl;
