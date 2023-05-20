import { getMarkers } from "../API/Marker";
import markerActionType from "../config/markerAction";

export async function requestMarkers(dispatch, getState) {
    try {
      const markers = await getMarkers();
      dispatch({ type: markerActionType.get, markers })
    } catch (e) {
        console.log(e);
    }
  }

