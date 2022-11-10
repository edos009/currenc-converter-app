import * as currenciesAC from "../currenciesReducer";
import * as API from "../../api";

export const getCurrencies = () => async (dispatch) => {
  try {
    dispatch(currenciesAC.getCurrenciesRequest());
    const { data } = await API.getAllCurrencies();
    dispatch(currenciesAC.getCurrenciesSuccess({ currencies: data }));
  } catch (error) {
    dispatch(currenciesAC.getCurrenciesError({ error }));
  }
};
