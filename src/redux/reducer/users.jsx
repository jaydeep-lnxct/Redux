import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {},
        uid: {},
        userData:[],
    },
    reducers: {
        loginUser: (state, actions) => {
            state.value = actions.payload.userDetils;
            state.uid = actions.payload.uid;
        },
        logoutUser: (state) => {
            state.value = {};
            state.uid = {};
        },
        userData:(state, actions) => {
            state.userData = actions.payload;
        },
        deleteuserData:(state, actions) => {
            state.userData = [];
        },
    }
});

export const userPersistConfig = {
    key: "user",
    storage,
  };

  export const counterPersistConfig = {
    key: "counter",
    storage,
  };
  
export const { loginUser, logoutUser ,userData,deleteuserData} = userSlice.actions;

export const useUserData = ()=> {
    const data = useSelector(state=> state.user.userData)
    return data
}
export const userReucer = userSlice.reducer;