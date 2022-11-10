import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import currenciesReducer from "../reducers/currenciesReducer";

const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;
