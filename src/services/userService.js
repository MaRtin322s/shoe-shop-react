const baseUrl = "http://localhost:3030/users";

export const registerUser = () => {
    return fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
}