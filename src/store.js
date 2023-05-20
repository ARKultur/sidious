import { configureStore} from '@reduxjs/toolkit'
import rootReducer from "../src/redux-reducer/reducer"
import { asyncFunctionMiddleware } from './redux-middleware/asyncFunctionMiddleware';


export default configureStore({
  reducer: {rootReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(asyncFunctionMiddleware),
})

