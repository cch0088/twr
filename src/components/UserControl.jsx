import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { logout } from '../features/UserSlice';
import { endSession } from '../features/SessionSlice';
import { logoutService } from '../features/UserServices';
import Modal from './Modal';
import LoginDialog from './LoginDialog';

function UserControl() {

    const session = useSelector(state => state.session.value);
    const user = useSelector(state => state.user.value);
    const modal = useSelector(state => state.modal.value);

    const dispatch = useDispatch();

    function handleLogout() {
        logoutService(session.csrf_token, user.logout_token).then(user => {
            if (user.message) {
                console.log(user.message);
            }
            else
            {
                dispatch(logout());
                dispatch(endSession());
            }
        });
    }

    function handleAccount() {
        console.log(session.csrf_token);
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
            modal.show && <Modal children={<LoginDialog />}/>
        }
    </div>
    )
}
export default UserControl;
