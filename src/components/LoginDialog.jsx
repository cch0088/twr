import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';
import { closeModal } from '../features/ModalSlice';
import { loginService } from '../features/UserServices';

function LoginDialog() {

    const dispatch = useDispatch();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(event) {
        loginService(username, password).then(user => {
            if (user.current_user) {
                dispatch(login(user));
                dispatch(closeModal());
            }
            else
            {
                setError(user.message);
            }
        });
    }

    function handleUsername(event) {
        setUserName(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

return (
    <div id="site-form">
        <div className="title-label">SIGN IN</div>
        {(error) ? <div className='error-label'>{error}</div> : null}
        <div className="label-login">Username</div>
        <input className="field-login" type="text" name="username" onChange={handleUsername} value={username}/>
        <div className="label-login">Password</div>
        <input className="field-login" type="password" name="password" onChange={handlePassword} value={password}/>
        <a className="link-label" href="/forgot">Forgot Password</a>
        <input className="button" type="button" name="login" value="Sign In" onClick={handleLogin} />
        <a className="link-label" href="/register">Create Account</a>
    </div>
    )
}

export default LoginDialog;
