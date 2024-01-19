import axios from 'axios';
import { API_URL } from '../config/API';

export async function createReview(token, guideId, data) {
    const res = await axios.post(`${API_URL}/api/review/${guideId}`,
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
    const res = await axios.get(`${API_URL}/api/review/${id}`,
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
    const res = await axios.patch(`${API_URL}/api/review/${id}`,
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
    const res = await axios.delete(`${API_URL}/api/review/${id}`,
        {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .catch(console.log());
    return res.data;
}