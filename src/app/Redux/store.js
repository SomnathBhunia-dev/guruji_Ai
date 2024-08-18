// store.js
import { configureStore } from "@reduxjs/toolkit";
import  reducer  from "./Reducers/reducer";

const store = configureStore({
  reducer : {
    chat : reducer
  }
})

export default store;
