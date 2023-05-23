import axios from 'axios';
import { API_URL } from '../config/API';

export const getMarkers = async () => {
  const URL = API_URL + '/api/nodes/all';
    const response = await axios.get(URL)
    return response.data;
}

export const addMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: marker.name,
    longitude: marker.longitude,
    latitude: marker.latitude,
    description: marker.description
  };
  const params = {
    headers: { Authorization: `Bearer ${token}` }
  }
    const response = await axios.post(URL, jsonBody, params )
    return response.data;
}

export const editMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: marker.name,
    longitude: marker.longitude,
    latitude: marker.latitude,
    address: null,
    organisation: null,
    description: marker.description
  };
  const params = {
    headers: { Authorization: `Bearer ${token}` }
  }
    const response = await axios.patch(URL, jsonBody, params );
    return response.data;
}

export const deleteMarkerToDB = async (marker) => {
  const URL = API_URL + '/api/nodes';
  const jsonBody = {
    name: marker.name,
  };
  const token = localStorage.getItem("token");

  const params = {
    headers: { Authorization: `Bearer ${token}` }
  }
    const response = await axios.delete (URL, jsonBody, params)
    return response.data;
}
