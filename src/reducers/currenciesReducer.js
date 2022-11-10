import { createSlice } from "@reduxjs/toolkit";

const currenciesSlice = createSlice({
  name: "currencies",
  initialState: {
    currencies: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    getCurrenciesRequest(state) {
      state.isFetching = true;
    },
    getCurrenciesSuccess(state, { payload: { currencies } }) {
      state.isFetching = false;
      state.currencies = currencies;
    },
    getCurrenciesError(state, { payload: { error } }) {
      state.isFetching = false;
      state.error = error;
    },
  },
});

export const {
  getCurrenciesRequest,
  getCurrenciesSuccess,
  getCurrenciesError,
} = currenciesSlice.actions;

export default currenciesSlice.reducer;
