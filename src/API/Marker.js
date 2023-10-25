import axios from "axios";
import { API_URL } from "../config/API";

export const getMarkers = async () => {
  const URL = API_URL + "/api/nodes/all";
  const response = await axios.get(URL);
  return response.data;
};

export const getOrganisationMarkers = async (token) => {
  const URL = API_URL + "/api/nodes";
  const params = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(URL, params);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const addMarkerToDB = async (marker) => {
  const URL = API_URL + "/api/nodes";
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: marker.name,
    longitude: Number(marker.longitude),
    latitude: Number(marker.latitude),
    description: marker.description, 
  };

  const params = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.post(URL, jsonBody, params);
  } catch (e) {
    throw e;
  }
};

export const editMarkerToDB = async (marker) => {
  const URL = API_URL + "/api/nodes";
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: marker.name,
    longitude: parseInt(marker.longitude),
    latitude: parseInt(marker.latitude),
    address: null,
    organisation: null,
    description: marker.description,
  };
  const params = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.patch(URL, jsonBody, params);
  } catch (e) {
    throw e;
  }
};

export const deleteMarkerToDB = async (marker) => {
  const URL = API_URL + "/api/nodes";
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: marker.name,
      },
    });
  } catch (e) {
    throw e;
  }
};

const MarkerService = {
  getMarkers,
  getOrganisationMarkers,
  addMarkerToDB,
  editMarkerToDB,
  deleteMarkerToDB,
};

export default MarkerService;
