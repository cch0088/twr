import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/ModalSlice';
import { logout } from '../features/UserSlice';
import { logoutService } from '../features/UserServices';
import { endSession } from '../features/SessionSlice';
import Modal from './Modal';
import LoginForm from './forms/LoginForm';

function UserControl() {

    const user = useSelector(state => state.user.value);
    const modal = useSelector(state => state.modal.value);

    const history = useHistory();
    const dispatch = useDispatch();

    function handleLogout() {
        logoutService(user.logout_token, user.csrf_token)
        .then(resp => {
            console.log(resp.message);
            dispatch(logout());
            dispatch(endSession());
        });
    }

    function handleLogin() {
        dispatch(openModal());
    }

return (
        <div id="usercontrol">
            { modal.show && <Modal children={ <LoginForm /> }/> }
            <>
                <span className="userbutton" onClick={() => { history.push("/orders") }}>🛒 Orders</span>
                <span className="userbutton" onClick={() => { history.push("/search") }}>🔍 Search</span>
            </>
            {
                (user.current_user.name === '') ?
                <>
                    <span className="userbutton" onClick={() => { history.push("/register") }}>🆕 Sign Up</span>
                    <span className="userbutton" onClick={handleLogin}>👤 Log In</span>
                </> :
                <>
                    <span className="userbutton" onClick={() => { history.push("/account") }}>👤 Account</span>
                    <span className="userbutton" onClick={handleLogout}>🚪 Log Out</span>
                </>
            }
        </div>
    )
}
export default UserControl;
