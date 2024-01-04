import axios from 'axios';

const endpoint = 'http://x2024arkultur120290831001.westeurope.cloudapp.azure.com:4000/api';

export async function createReview(token, guideId, data) {
    const res = await axios.post(`${endpoint}/review/${guideId}`,
        {
            stars: data.stars,
            message: data.message,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function findReview(token, id, guideId) {
    const res = await axios.get(`${endpoint}/review/${id}`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            params: {
                id,
                guideId,
            }
        })
        .catch(console.log());
    return res.data;
}

export async function patchReview(token, id, data) {
    const res = await axios.patch(`${endpoint}/review/${id}`,
        {
            stars: data.stars,
            message: data.message,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}

export async function deleteReview(token, id) {
    const res = await axios.delete(`${endpoint}/review/${id}`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}