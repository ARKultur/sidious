import axios from 'axios';

const endpoint = 'http://x2024arkultur120290831001.westeurope.cloudapp.azure.com:4000/api';

export async function createNode(token, name, longitude, latitude) {
    const res = await axios.post(`${endpoint}/nodes`,
        {
            "name": name,
            "longitude": longitude,
            "latitude": latitude
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log);
    return res.data;
}

export async function getNodesUserOrganization(token) {
    const res = await axios.get(`${endpoint}/nodes`,
        {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log);
    return res.data;
}

export async function getNode(token, name) {
    const res = await axios.get(`${endpoint}/nodes/${name}`,
        {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log);
    return res.data;
}

export async function getNodes(token) {
    const res = await axios.get(`${endpoint}/nodes/admin`,
        {}, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log);
    return res.data;
}