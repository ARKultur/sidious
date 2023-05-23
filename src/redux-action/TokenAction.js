import { getToken } from "../API/Token";
import tokenActionType from "../config/tokenActionType";

const storeTokenSuccess = (token) => {
    return {
        type: tokenActionType.GET_TOKEN,
        payload: token
    }
}

export const storeTokenAction = (data) => {
  return async function(dispatch) {
    try {
      const token = await getToken(data);
      console.log("token fetched", token);
      console.log("storeToken");
      dispatch(storeTokenSuccess(token));
    } catch (e) {
        console.log(e);
    }
  }
}
