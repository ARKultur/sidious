import { createSlice } from '@reduxjs/toolkit';
import { requestJourneys, requestOrganisationJourneys, addJourney, editJourney, deleteJourney, requestOrganisationJourneysByAdmin, deleteJourneyByAdmin } from "../redux-action/JourneyAction";
const initialState = {
  journeys: [],
  isLoading: false
}

const journeySlice = createSlice({
    name: 'journey',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(requestJourneys.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(requestJourneys.fulfilled, (state, action) => {
          state.isLoading = false
          state.journeys = action.payload
        })
        builder.addCase(requestJourneys.rejected, (state) => {
          state.isLoading = false
        })
        builder.addCase(requestOrganisationJourneys.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(requestOrganisationJourneys.fulfilled, (state, action) => {
          state.isLoading = false
          state.journeys = action.payload
        })
        builder.addCase(requestOrganisationJourneys.rejected, (state) => {
          state.isLoading = false
        })
        builder.addCase(requestOrganisationJourneysByAdmin.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(requestOrganisationJourneysByAdmin.fulfilled, (state, action) => {
          state.isLoading = false
          state.journeys = action.payload
        })
        builder.addCase(requestOrganisationJourneysByAdmin.rejected, (state) => {
          state.isLoading = false
        })
        builder.addCase(addJourney.fulfilled, (state, action) => {
          state.journeys = action.payload
        })
        builder.addCase(deleteJourney.fulfilled, (state, action) => {
          state.journeys = action.payload
        })
        builder.addCase(deleteJourneyByAdmin.fulfilled, (state, action) => {
          state.journeys = action.payload
        })
        builder.addCase(editJourney.fulfilled, (state, action) => {
          state.journeys = action.payload
        })
    },
});

const { reducer } = journeySlice;
export default reducer;
