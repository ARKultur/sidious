import axios from 'axios';
import { API_URL } from '../config/API';

export const getMarkers = async () => {
  const URL = API_URL + '/api/nodes/all';
    
  /*const markers = [
        {name: 'Tour Eiffel', description: "test1", longitude: -68.686474 , latitude: 32.424497},
        {name: 'Tour de Pise', description: "test2", longitude:  6321321 , latitude: 1290564},
        {name: 'Tour de l\'infini', description: "test3", longitude: 5532323 , latitude: 1629054},
      ];
    return markers;*/
    const response = await axios.get(URL)
    return response.data;
}

export const addMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
    longitude: marker.longitude,
    latitude: marker.latitude,
    description: marker.description
  };
  const params = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0NzczNjY4LCJleHAiOjE2ODQ3NzcyNjh9.i1WHh5JF5FXzl66G_S8PHJVFm_vqhEfFVi1MR3bajlM` }
  }
    console.log("addMarkerToDB");
    const response = await axios.post(URL, jsonBody, params )
    return response.data; 
}

export const editMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
    longitude: marker.longitude,
    latitude: marker.latitude,
    description: marker.description
  };
  const params = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0NzYzODczLCJleHAiOjE2ODQ3Njc0NzN9.ukprUz7g1Y5gsi9EoRUzYWY2UKvhKoTe06wQNsq9o34` }
  }
    const response = await axios.patch(URL, jsonBody, params )
    return response.data; 
}

export const deleteMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
  };
  const params = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0NzYzODczLCJleHAiOjE2ODQ3Njc0NzN9.ukprUz7g1Y5gsi9EoRUzYWY2UKvhKoTe06wQNsq9o34` }
  }
    const response = await axios.delete(URL, jsonBody, params )
    return response.data; 
}