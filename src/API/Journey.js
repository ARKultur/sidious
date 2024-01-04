import axios from "axios";
import { API_URL } from "../config/API";

export const getJourneys = async (token) => {
  const URL = API_URL + "/api/parkours";
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

export const getOrganisationJourneys = async (token, id) => {
  const URL = API_URL + `/api/parkours/orga/${id}`;
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

export const getOrganisationJourneysByAdmin = async (token, id) => {
  const URL = API_URL + `/api/parkours/admin/orga/${id}`;
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

export const addJourneyToDB = async (journey, organisationId) => {
  const URL = API_URL + "/api/parkours";
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: journey.name,
    description: journey.description,
    status: journey.status,
    organisationId: Number(organisationId)
    //parkours: [{parkourId: "0", order: marker.order}] 
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

export const editJourneyToDB = async (journey, id) => {
  const URL = API_URL + `/api/parkours/${id}`;
  const token = localStorage.getItem("token");
  const jsonBody = {
    name: journey.name,
    description: journey.description,
    status: journey.description,
    organisation_id: journey.OrganisationId,
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

export const deleteJourneyToDB = async (journey, id) => {
  const URL = API_URL + `/api/parkours/${id}`;
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw e;
  }
};

export const deleteJourneyByAdminToDB = async (journey, id) => {
  const URL = API_URL + `/api/parkours/admin/${id}`;
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw e;
  }
};

const JourneyService = {
  getJourneys,
  getOrganisationJourneys,
  getOrganisationJourneysByAdmin,
  addJourneyToDB,
  editJourneyToDB,
  deleteJourneyToDB,
  deleteJourneyByAdminToDB,
};

export default JourneyService;
