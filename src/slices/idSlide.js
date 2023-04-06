import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "category_id",
  initialState: null,
  reducers: {
    setId: (state, action) => {
      console.log(action.payload)
      return action.payload;
      
    },
  },
});

export const { setId } = idSlice.actions;
export default idSlice.reducer;