import { combineReducers } from 'redux'
import { markerReducer } from './MarkerReducer'

const rootReducer = combineReducers({
  marker: markerReducer,
})

export default rootReducer