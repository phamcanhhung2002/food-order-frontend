import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInfoProps {
    username: string;
    token?: string;
}

const initialState: UserInfoProps = {
  token: "",
  username: "", 
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveInfo: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearInfo: (state) => {
      state = initialState;
      return state;
    },
  },
});

const logOut = createAction("user/logOut");

export const { saveInfo, clearInfo } = userSlice.actions;

export { logOut };

export default userSlice.reducer;
