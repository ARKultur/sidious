import axios from "axios";
import { API_URL } from "../config/API";

export const getSubbedToNewsletter = async () => {
  try {
    const response = await axios.get(API_URL + "/api/newsletter", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (e) {
    return [];
  }
};

export const sendNewsletter = async (data) => {
  try {
    const response = await axios.post(
      API_URL + "/api/newsletter/create",
      {
        subject: data.subject,
        text: data.text,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  } catch (e) {
    return [];
  }
};
