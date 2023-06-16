import { combineReducers } from 'redux'
import markerReducer  from './MarkerReducer'
import userReducer from './UserReducer'

const rootReducer = combineReducers({
  markerReducer,
  userReducer,
})

export default rootReducer