export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN = {
    POST: (body) => ({
        url: API_URL.concat('/jwt-auth/v1/token'),
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }),
}

export const USER = {
    GET: (token) => ({
        url: API_URL.concat('/api/user'),
        options: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '.concat(token)
            }
        }
    }),
}