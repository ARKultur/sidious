import axios from 'axios';

const endpoint = 'http://x2024arkultur120290831001.westeurope.cloudapp.azure.com:4000/api';

export async function ping() {
    const res = await axios
        .get(`${endpoint}/ping`)
        .catch(() => {
            return false;
        });
    return true;
}

export async function apiLogin(email, password) {
    const res = await axios
        .post(`${endpoint}/login`, {
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
        .post(`${endpoint}/signin`, {
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
        .get(`${endpoint}/accounts?email=${email}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return res.data;
}

// export async function emailVerification(email) {
//     const res = await axios.post(`${endpoint}/account/reset`, {
//         })
//         .catch(console.log);
//     return res.data
// }

export async function forgotPassword(username, email, password) {
    const res = await axios.post(`${endpoint}/account/reset`, {
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
//     const res = await axios.post(`${endpoint}/account/forgot`, {
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
        .patch(`${endpoint}/accounts`, {
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