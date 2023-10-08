import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { logout } from '../features/UserSlice';
import { logoutService } from '../features/UserServices';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';

function UserControl() {

    const user = useSelector(state => state.user.value);
    const modal = useSelector(state => state.modal.value);

    const dispatch = useDispatch();

    function handleLogout() {
        logoutService(user.csrf_token, user.logout_token)
        .then(resp => {
            if (resp.message) {
                console.log(resp.message);
                dispatch(logout());
            }
            else {
                dispatch(logout());
            }
        });
    }

    function handleAccount() {
        console.log(user.csrf_token);
        console.log(user.logout_token);
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
                <span className="userbutton" onClick={handleAccount}>👤 Account</span>
                <span className="userbutton" onClick={handleLogout}>🚪 Log Out</span>
            </>
        }
        {
            modal.show && <Modal children={<LoginForm />}/>
        }
    </div>
    )
}
export default UserControl;
