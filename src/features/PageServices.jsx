import { API } from '../config';

function PageServices() {}
export default PageServices;

export async function getContent(fromUrl) {
    const params = '?' + new URLSearchParams({
        '_format': 'json'
    })

    try {
        const response = await fetch(API + fromUrl + params);
        const data = await response.json();
        return data;
    }
    catch {
        return {"message": "Access Error Loading Slide"};
    }
};
