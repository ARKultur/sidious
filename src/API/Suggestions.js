import axios from 'axios';
import { API_URL } from '../config/API';

export const getSuggestions = async () => {
  try {
    const response = await axios.get(API_URL + '/api/suggestion', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return response.data;
  } catch (e) {
    return [];
  }
};

export const addSuggestions = async (suggestion) => {
  try {
    const response = await axios.post(
      API_URL + '/api/suggestion',
      {
        ...suggestion,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    return [];
  }
};

export const editSuggestions = async (suggestion) => {
  try {
    const response = await axios.post(
      API_URL + `/api/suggestion/${suggestion.uuid}`,
      {
        ...suggestion,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    return [];
  }
};

export const deleteSuggestions = async (suggestionid) => {
  try {
    const response = await axios.delete(
      API_URL + `/api/suggestion/${suggestionid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    return [];
  }
};
