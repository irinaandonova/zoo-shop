const baseUrl = 'http://localhost:4000/auth';

const register = async ({ firstName, lastName, email, phoneNumber, address, town, password }) => {
    try {
        let response = await fetch(`${baseUrl}/register`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, phoneNumber, address, town, password })
        })
        return await response.json();
    }
    catch (err) {
        console.log(err);
        alert('Registartion failed!')
    }
}
const login = async ({ email, password }) => {
    let response = await fetch(`${baseUrl}/login`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
    })

    let result = await response.json();
    return result;
}
const editProfile = (_id) => {
    let response = fetch(`${baseUrl}/${_id}`)
        .then(res => res.json())
        .catch(err => console.log(err));

    return response;
}

const authService = {
    editProfile,
    login,
    register
}

export default authService;