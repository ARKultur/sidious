import axios from 'axios';

const local = 'http://localhost:4000';
const endpoint = local;
// const endpoint = 'https://arkultur.creative-rift.com';

export async function ping() {
    const res = await axios.get(`${endpoint}/ping`)
    return res.data;
}

export async function login(email, password) {
    const res = await axios.post(`${endpoint}/login`, {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data;
}

export async function logout(token) {
    const res = await axios.get(`${endpoint}/logout`,
    {}, {
        headers: {
            token: token
        }
    });
    return res.data;
}

export async function register(username, email, first_name, last_name, password) {
    const res = await axios.post(`${endpoint}/logout`, {
        auth: {
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            password: password
        },
        creation_date: Date.now().toString()
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data;
}

export async function forgotPassword(email) {
    const res = await axios.put(`${endpoint}/reset`, {
        email: email
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data
}

export async function updatePassword(token, password) {
    const res = await axios.post(`${endpoint}/reset?token=${token}`, {
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.data
}