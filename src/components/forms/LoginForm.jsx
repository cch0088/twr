import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/UserSlice';
import { newSession } from '../../features/SessionSlice';
import { loginService, sessionTokenService } from '../../features/UserServices';
import { closeModal } from '../../features/ModalSlice';

function LoginForm() {

    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (username.length > 0 && password.length > 0) {
            sessionTokenService().then(token => {
                if (token.csrf_token) {
                    dispatch(newSession(token));
                    loginService(username, password, token.csrf_token)
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
                else {
                    setError(token.message);
                }
            });
        } else {
            setError("Missing username or password!");
        }
    }

return (<form id="site-form">
        <div className="title-label">SIGN IN</div>
        
        {(error) ? <div className='error-label'>{error}</div> : null}
        
        <div className="label-login">Username</div>
        
        <input className="field-login" 
            type="text"
            name="username"
            onChange={(e) => { setUserName(e.target.value); }}
            value={username}
        />

        <div className="label-login">Password</div>

        <input className="field-login"
            type="password"
            name="password"
            onChange={(e) => { setPassword(e.target.value); }}
            value={password}
        />

        <a className="link-label" href="/forgot">Forgot Password</a>

        <input className="button"
            type="submit"
            name="login"
            value="Sign In"
            onClick={(e) => { handleLogin(e); }}
        />

        <a className="link-label" href="/register">Create Account</a>
    </form>)
}

export default LoginForm;
