import { combineReducers } from 'redux'
import { markerReducer, tokenReducer } from './MarkerReducer'

const rootReducer = combineReducers({
  marker: markerReducer,
  token: tokenReducer,
})

export default rootReducer
