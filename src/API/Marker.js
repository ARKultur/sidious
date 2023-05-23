import axios from 'axios';
import { API_URL } from '../config/API';

export const getMarkers = async () => {
  const URL = API_URL + '/api/nodes/all';
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
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0Nzg5NTM5LCJleHAiOjE2ODQ3OTMxMzl9.A-IZuCNUdkx0SqtK3ApYw6J-fTUnxK2A-D8sQGo4lYI` }
  }
    const response = await axios.post(URL, jsonBody, params )
    return response.data; 
}

export const editMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
    longitude: marker.longitude,
    latitude: marker.latitude,
    address: null,
    organisation: null,
    description: marker.description
  };
  const params = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0Nzg5NTM5LCJleHAiOjE2ODQ3OTMxMzl9.A-IZuCNUdkx0SqtK3ApYw6J-fTUnxK2A-D8sQGo4lYI` }
  }
    const response = await axios.patch(URL, jsonBody, params );
    return response.data; 
}

export const deleteMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
  };
  const params = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1heGltZS50ZXN0QHRlc3QubmV0IiwiaWF0IjoxNjg0NzgzOTk3LCJleHAiOjE2ODQ3ODc1OTd9.OXJIlUQGbQS7QjHJooncSRM-TLLMuB-eMDqeRPbpAqY` }
  }
    const response = await axios.delete (URL, jsonBody, params)
    return response.data; 
}