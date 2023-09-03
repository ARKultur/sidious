import axios from "axios";
import { API_URL } from "../config/API";

export const getContacts = async () => {
  try {
    const response = await axios.get(API_URL + "/api/contact", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (e) {
    return {};
    // throw e;
  }
};
