import { combineReducers } from 'redux';
import { markerReducer } from './MarkerReducer';
import { tokenReducer } from './TokenReducer';

const rootReducer = combineReducers({
  marker: markerReducer,
  token: tokenReducer,
})

export default rootReducer
