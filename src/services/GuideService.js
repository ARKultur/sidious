import axios from 'axios';
import { API_URL } from '../config/API';

export async function createGuide(token, data) {
    const res = await axios.post(`${API_URL}/api/guides`,
        {
            title: data.title,
            description: data.description,
            keywords: data.keywords,
            openingHours: data.openingHours,
            priceDesc: data.priceDesc,
            priceValue: data.priceValue,
            website: data.website,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function editGuide(token, id, nodeId, data) {
    const res = await axios.patch(`${API_URL}/api/guides/${id}`,
        {
            NodeId: nodeId,
            title: data.title,
            description: data.description,
            keywords: data.keywords,
            openingHours: data.openingHours,
            priceDesc: data.priceDesc,
            priceValue: data.priceValue,
            website: data.website,
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
    const res = await axios.delete(`${API_URL}/api/guides/${id}`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getGuidesUserOrganization(token) {
    const res = await axios.get(`${API_URL}/api/guides`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getGuide(id) {
    const res = await axios.get(`${API_URL}/api/guides/${id}`, {})
        .catch(console.log());
    return res.data;
}

export async function getAllGuides(token) {
    const res = await axios.get(`${API_URL}/api/guides/admin`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function getGuideImages(id) {
    const res = await axios.get(`${API_URL}/api/guides/${id}/images/`, {})
        .catch(console.log());
    return res.data;
}

export async function downloadGuideImage(id, name) {
    console.log(`Name : ${name}`)
    const res = await axios.get(`${API_URL}/api/guides/${id}/images/${name}`, {})
        .catch(console.log());
    return res.data;
}