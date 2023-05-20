import axios from 'axios';
import { API_URL } from '../config/API';

export const getMarkers = async (body, thunkAPI) => {
    const markers = [
        {name: 'Tour Eiffel', description: "test1", longitude: -68.686474 , latitude: 32.424497},
        {name: 'Tour de Pise', description: "test2", longitude:  6321321 , latitude: 1290564},
        {name: 'Tour de l\'infini', description: "test3", longitude: 5532323 , latitude: 1629054},
      ];
    return markers;
    //const response = await axios.post(API_URL + '/markers')
    //return response.data;
}