function PageServices() {}
export default PageServices;

export async function getContent(fromUrl) {
    const params = '?' + new URLSearchParams({
        '_format': 'json'
    })

    try {
        const response = await fetch(fromUrl + params);
        const data = await response.json();
        return data;
    }
    catch {
        return {"message": "Access Error"};
    }
};
