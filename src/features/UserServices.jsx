import { API_LOGIN, API_LOGOUT, API_SESSION_TOKEN } from '../config';

function UserServices() {}
export default UserServices;

export async function loginService(username, password) {
    if (username.length > 0 && password.length > 0) {
        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': username,
                'pass': password
            })
        };

        const params = '?' + new URLSearchParams({
            '_format': 'json',
        })

        try {
            const response = await fetch(API_LOGIN + params, options);
            const data = await response.json();
            return data;
        }
        catch {
            return {"message": "There was a problem with your request."};
        }
    } else { return {"message": "Missing password or username!"}; }
};

export async function logoutService(csrf_token, logout_token) {
    const options = {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrf_token
        }
    };
    
    const params = '?' + new URLSearchParams({
        '_format': 'json',
        'token': logout_token
    })

    try {
        const response = await fetch(API_LOGOUT + params, options);
        const data = await response.json();
        return data;
    }
    catch {
        return {"message": "There was a problem with your request."};
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
