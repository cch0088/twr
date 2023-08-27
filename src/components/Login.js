import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/User';

function Login(props) {

    const dispatch = useDispatch();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();
    
    function handleLogin(event) {

        dispatch(login({name: 'TestUser', age: 20, email: 'a@a.net'}));

        const API = props.API + "/login";
        if (username.length > 0 && password.length > 0)
        {
            setError("");

            const formData = {
                username: username,
                password: password
            };

            const API_OPT = {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            };
            
            fetch(API, API_OPT)
            .then(resp => resp.json())
            .then(data => {
                if (data) {
                    for (let key in data)
                    {
                        if (key === 'error')
                        {
                            setError(data[key]);
                        }
                        else
                        {
                            props.setUser(data);
                            history.push("/");
                        }
                    }
                }
            })
        }
        else
        {
            setError("Missing password or username!");
        }
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
        <a className="link-label" href="/cakecity/forgot">Forgot Password</a>
        <input className="button" type="button" name="login" value="Sign In" onClick={handleLogin} />
        <a className="link-label" href="/cakecity/register">Create Account</a>
    </div>
    )
}

export default Login;