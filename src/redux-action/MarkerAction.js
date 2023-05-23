import { getMarkers, addMarkerToDB } from "../API/Marker";
import markerActionType from "../config/markerAction";

const GetMarkersRequest = () => {
  return {
    type: markerActionType.GET_MARKERS_REQUESTED
  }
}

const GetMarkersSuccess = markers => {
  return {
    type: markerActionType.GET_MARKERS_SUCCEEDED,
    payload: markers
  }
}

export const requestMarkers = () => {
  return async function(dispatch) {
    try {
      dispatch(GetMarkersRequest);
      const markers = await getMarkers();
      dispatch(GetMarkersSuccess(markers));
    } catch (e) {
        console.log(e);
    }
  }
}

export const addMarker = (marker) => {
  return async function(dispatch) {
    try {
      console.log("addMarker");
      const errorResponce = await addMarkerToDB(marker);
      return {type: markerActionType.ADD_MARKERS}
    } catch (e) {
        console.log(e);
    }
  }
}
