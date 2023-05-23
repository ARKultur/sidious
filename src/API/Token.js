import axios from 'axios';
import { API_URL } from '../config/API';

export const getToken = async(data) => {
    const response = await axios.post(`${API_URL}/api/login`, {
      email: data.get('email'),
      password: data.get('password'),
    })
    return response.data;
}
