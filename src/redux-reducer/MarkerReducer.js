import { createSlice } from '@reduxjs/toolkit';
import { requestMarkers, requestOrganisationMarkers, addMarker, editMarker, deleteMarker } from "../redux-action/MarkerAction";
const initialState = {
  markers: [],
  isLoading: false
}

const markerSlice = createSlice({
    name: 'marker',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(requestMarkers.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(requestMarkers.fulfilled, (state, action) => {
          state.isLoading = false
          state.markers = action.payload
        })
        builder.addCase(requestMarkers.rejected, (state) => {
          state.isLoading = false
        })
        builder.addCase(requestOrganisationMarkers.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(requestOrganisationMarkers.fulfilled, (state, action) => {
          state.isLoading = false
          state.markers = action.payload
        })
        builder.addCase(requestOrganisationMarkers.rejected, (state) => {
          state.isLoading = false
        })
        builder.addCase(addMarker.fulfilled, (state, action) => {
          state.markers = action.payload
        })
        builder.addCase(deleteMarker.fulfilled, (state, action) => {
          state.markers = action.payload
        })
        builder.addCase(editMarker.fulfilled, (state, action) => {
          state.markers = action.payload
        })
    },
});

const { reducer } = markerSlice;
export default reducer;
