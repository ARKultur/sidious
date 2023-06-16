import MarkerService, { getMarkers, addMarkerToDB, editMarkerToDB, deleteMarkerToDB } from "../API/Marker";
import { createAsyncThunk } from "@reduxjs/toolkit"


export const requestMarkers = createAsyncThunk(
  'markers/get',
  async () => {
    try { 
      const result = await MarkerService.getMarkers();
      return (result);
      
    } catch (error) {
      console.error(error);
    }
  }
);

export const requestOrganisationMarkers = createAsyncThunk(
  'markersOrganisation/get',
  async (token) => {
    try { 
      const result = await MarkerService.getOrganisationMarkers(token);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addMarker = createAsyncThunk(
  'marker/post',
  async (marker, { getState }) => {
    const states = getState();
    const markers = [].concat(states.rootReducer.markerReducer.markers);
    try { 
      await MarkerService.addMarkerToDB(marker);
      markers.push(marker); 
      return (markers);
    } catch (error) {
      console.error(error);
    }
  }
);

export const editMarker = createAsyncThunk(
  'marker/patch',
  async (marker, { getState }) => {
    const states = getState()
    const markers = [].concat(states.rootReducer.markerReducer.markers);
    try { 
      await editMarkerToDB(marker);
      markers.map((item, index) => {
        if (item.id === marker.id) {
          markers[index] = marker 
        }
      })
      return markers;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteMarker = createAsyncThunk(
  'marker/delete',
  async (marker, { getState }) => {
    const states = getState();
    const markers = [].concat(states.rootReducer.markerReducer.markers);
    try { 
      await deleteMarkerToDB(marker);
      markers.pop(marker); 
      return (markers);

    } catch (error) {
      console.error(error);
    }
  }
);