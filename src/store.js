import { configureStore} from '@reduxjs/toolkit'
import rootReducer from "../src/redux-reducer/reducer"



export default configureStore({
  reducer: {rootReducer},
})

