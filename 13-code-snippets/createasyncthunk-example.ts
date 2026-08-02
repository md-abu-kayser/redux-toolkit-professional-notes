import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserApi } from "../../api";
export const fetchUser = createAsyncThunk(
  "users/fetchById",
  async (userId: number, { rejectWithValue }) => {
    try {
      return await fetchUserApi(userId);
    } catch (err) {
      return rejectWithValue("Failed to load user");
    }
  },
);
