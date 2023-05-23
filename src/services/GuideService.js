import axios from 'axios';

const endpoint = 'http://x2024arkultur120290831001.westeurope.cloudapp.azure.com:4000/api';

export async function createGuide(token, text) {
    const res = await axios.post(`${endpoint}/guides`,
        {
            'text': text
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function editGuide(token, text, id, nodeId) {
    const res = await axios.patch(`${endpoint}/guides`,
        {
            'text': text,
            "id": id,
            "node": nodeId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function deleteGuide(token, id) {
    const res = await axios.delete(`${endpoint}/guides`,
        {
            "id": id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getGuidesUserOrganization(token) {
    const res = await axios.get(`${endpoint}/guides`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getGuide(token, id) {
    const res = await axios.get(`${endpoint}/guides/${id}`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getAllGuides(token) {
    const res = await axios.get(`${endpoint}/guides/admin`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}