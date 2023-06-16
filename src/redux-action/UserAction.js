import AuthService from "../API/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk(
  'userInfo/get',
  async (props) => {
    try { 
      const userInfo = await AuthService.getInfo(props.uToken, props.uEmail);
      return (userInfo);
      
    } catch (error) {
      console.error(error);
    }
  }
);