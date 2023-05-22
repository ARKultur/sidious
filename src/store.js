import { configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from "../src/redux-reducer/reducer"
import { asyncFunctionMiddleware } from './redux-middleware/asyncFunctionMiddleware';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

/*export default configureStore({
  reducer: {rootReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncFunctionMiddleware),
})*/

