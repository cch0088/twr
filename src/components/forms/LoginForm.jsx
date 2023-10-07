import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/UserSlice';
import { loginService } from '../../features/UserServices';
import { closeModal } from '../../features/ModalSlice';

function LoginForm() {

    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        loginService(username, password)
        .then(user => {
            if (user.current_user) {
                dispatch(login(user));
                dispatch(closeModal());
            }
            else {
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

return (<form id="site-form">
    <div className="title-label">SIGN IN</div>
    
    {(error) ? <div className='error-label'>{error}</div> : null}
    
    <div className="label-login">Username</div>
    
    <input className="field-login" 
        type="text"
        name="username"
        onChange={handleUsername}
        value={username}
    />

    <div className="label-login">Password</div>

    <input className="field-login"
        type="password"
        name="password"
        onChange={handlePassword}
        value={password}
    />

    <a className="link-label" href="/forgot">Forgot Password</a>

    <input className="button"
        type="submit"
        name="login"
        value="Sign In"
        onClick={e => handleLogin(e)}
    />

    <a className="link-label" href="/register">Create Account</a>
    </form>)
}

export default LoginForm;
