import { combineReducers } from 'redux'
import markerReducer  from './MarkerReducer'
import userReducer from './UserReducer'
import journeyReducer from './JourneyReducer'

const rootReducer = combineReducers({
  markerReducer,
  userReducer,
  journeyReducer,
})

export default rootReducer