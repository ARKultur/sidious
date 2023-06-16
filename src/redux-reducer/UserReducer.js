import { getUserInfo } from "../redux-action/UserAction";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLogin : false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => { 
      builder.addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
});

const { reducer } = userSlice;
export default reducer;
