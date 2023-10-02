import { API_LOGIN } from '../config';

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

