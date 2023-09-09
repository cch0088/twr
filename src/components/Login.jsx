import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/UserSlice';
import { closeModal } from '../features/ModalSlice';

function Login(props) {

    const dispatch = useDispatch();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(event) {

        dispatch(login({name: 'TestUser', age: 20, email: 'a@a.net'}));
        dispatch(closeModal());

    //     const API = props.API + "/login";
    //     if (username.length > 0 && password.length > 0)
    //     {
    //         setError("");

    //         const formData = {
    //             username: username,
    //             password: password
    //         };

    //         const API_OPT = {
    //             method: 'POST',
    //             mode: 'cors',
    //             credentials: 'include',
    //             headers: { 
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         };
            
    //         fetch(API, API_OPT)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if (data) {
    //                 for (let key in data)
    //                 {
    //                     if (key === 'error')
    //                     {
    //                         setError(data[key]);
    //                     }
    //                     else
    //                     {
    //                         props.setUser(data);
    //                         history.push("/");
    //                     }
    //                 }
    //             }
    //         })
    //     }
    //     else
    //     {
    //         setError("Missing password or username!");
    //     }
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

export default Login;
