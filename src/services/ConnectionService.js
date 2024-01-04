import axios from 'axios';
import { API_URL } from '../config/API';

export async function ping() {
    const res = await axios
        .get(`${API_URL}/ping`)
        .catch(() => {
            return false;
        });
    return true;
}

export async function apiLogin(email, password) {
    const res = await axios
        .post(`${API_URL}/api/login`, {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    return res.data;
}

export async function apiRegister(username, email, password) {
    const res = await axios
        .post(`${API_URL}/api/signin`, {
            email: email,
            password: password,
            username: username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    return res.data;
}

export async function apiUserInfos(token, email) {
    const res = await axios
        .get(`${API_URL}/api/accounts?email=${email}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return res.data;
}

// export async function emailVerification(email) {
//     const res = await axios.post(`${API_URL}/api/account/reset`, {
//         })
//         .catch(console.log);
//     return res.data
// }

export async function forgotPassword(username, email, password) {
    const res = await axios.post(`${API_URL}/api/account/reset`, {
            email: email,
            password: password,
            username: username
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    return res.data;
}

// export async function updatePassword(token, password) {
//     const res = await axios.post(`${API_URL}/api/account/forgot`, {
//         password: password
//     }, {
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     return res.data
// }

export async function apiPatchUser(token, id, username, email, password, addressId, organizationId) {
    const res = await axios
        .patch(`${API_URL}/api/accounts`, {
            id: id,
            username: username,
            email: email,
            password: password,
            addressId: addressId,
            OrganisationId: organizationId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    return res.data;
}