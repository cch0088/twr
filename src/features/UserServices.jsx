import { API_LOGIN, API_LOGOUT, API_SESSION_TOKEN } from '../config';

function UserServices() {}
export default UserServices;

export async function loginService(username, password) {
    if (username.length > 0 && password.length > 0)
    {
        const API_POST_LOGIN_PROPS = {
            method: 'POST',
            //mode: 'cors',
            //credentials: 'include',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': username,
                'pass': password
            })
        };
        try {
            const response = await fetch(API_LOGIN, API_POST_LOGIN_PROPS);
            const data = await response.json();

            for (let key in data)
            {
                if (key === 'message')
                {
                    return {"message": data[key]};
                }
                else
                {
                    return data;
                }
            }
        }
        catch {
            return {"message": "There was a problem with your request."};
        }
    }
    else
    {
        return {"message": "Missing password or username!"};
    }
};

export async function sessionTokenService() {
    try {
        const response = await fetch(API_SESSION_TOKEN);
        const data = await response.text();

        return {"csrf_token": data};
    }
    catch {
        return {"message": "There was a problem with your session."};
    }
}

export async function logoutService(csrf_token, logout_token) {
    const API_POST_LOGOUT_PROPS = {
        method: 'POST',
        //mode: 'cors',
        //credentials: 'include',
        authentication: 'cookie',
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf_token
        }
    };
    try {
        const response = await fetch(API_LOGOUT + logout_token, API_POST_LOGOUT_PROPS);
        const data = await response.json();

        console.log(API_SESSION_TOKEN);

        for (let key in data)
        {
            if (key === 'message')
            {
                return {"message": data[key]};
            }
            else
            {
                return data;
            }
        }
    }
    catch {
        return {"message": "There was a problem with your request."};
    }
};

