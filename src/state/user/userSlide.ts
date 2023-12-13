import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  id: number | null;
  name: string | null;
  accessToken: string | null;
  numOfFoodsInOrder: number;
}

const initialState: IUserState = {
  id: null,
  name: null,
  accessToken: null,
  numOfFoodsInOrder: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, name, numOfFoodsInOrder, accessToken } = action.payload;
      state.id = userId;
      state.name = name;
      state.accessToken = accessToken;
      state.numOfFoodsInOrder = numOfFoodsInOrder;
    },
    logOut: (state) => {
      state.id = null;
      state.name = null;
      state.accessToken = null;
      state.numOfFoodsInOrder = 0;
    },
    setAccessToken: (state, action) => {
      const accessToken = action.payload;
      state.accessToken = accessToken;
    },
    setNumOfFoodsInOrder: (state, action) => {
      const numOfFoodsInOrder = action.payload;
      state.numOfFoodsInOrder = numOfFoodsInOrder;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccessToken, setNumOfFoodsInOrder, setCredentials, logOut } =
  userSlice.actions;

export default userSlice.reducer;
