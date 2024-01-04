import JourneyService from "../API/Journey";
import { createAsyncThunk } from "@reduxjs/toolkit"


export const requestJourneys = createAsyncThunk(
  'journeys/get',
  async (token) => {
    try { 
      const result = await JourneyService.getJourneys(token);
      return (result);
      
    } catch (error) {
      console.error(error);
    }
  }
);

export const requestOrganisationJourneys = createAsyncThunk(
  'journeysOrganisation/get',
  async (params) => {
    try { 
      const result = await JourneyService.getOrganisationJourneys(params.token, params.organisationId);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const requestOrganisationJourneysByAdmin = createAsyncThunk(
  'journeysOrganisationAdmin/get',
  async (params) => {
    try { 
      const result = await JourneyService.getOrganisationJourneysByAdmin(params.token, params.organisationId);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addJourney = createAsyncThunk(
  'journey/post',
  async (params, { getState }) => {
    const states = getState();
    const journeys = [].concat(states.rootReducer.journeyReducer.journeys);
    try { 
      await JourneyService.addJourneyToDB(params.journey, params.organisationId);
      journeys.push(params.journey); 
      return (journeys);
    } catch (error) {
      console.error(error);
    }
  }
);

export const editJourney = createAsyncThunk(
  'journey/patch',
  async (journey, { getState }) => {
    const states = getState()
    const journeys = [].concat(states.rootReducer.journeyReducer.journeys);
    try { 
      await JourneyService.editJourneyToDB(journey, journey.uuid);
      journeys.map((item, index) => {
        if (item.id === journey.id) {
          journeys[index] = journey 
        }
      })
      return journeys;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteJourney = createAsyncThunk(
  'journey/delete',
  async (journey, { getState }) => {
    const states = getState();
    const journeys = [].concat(states.rootReducer.journeyReducer.journeys);
    try { 
      await JourneyService.deleteJourneyToDB(journey, journey.uuid);
      journeys.pop(journey); 
      return (journeys);

    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteJourneyByAdmin = createAsyncThunk(
  'journeyAdmin/delete',
  async (journey, { getState }) => {
    const states = getState();
    const journeys = [].concat(states.rootReducer.journeyReducer.journeys);
    try { 
      await JourneyService.deleteJourneyByAdminToDB(journey, journey.uuid);
      journeys.pop(journey); 
      return (journeys);

    } catch (error) {
      console.error(error);
    }
  }
);