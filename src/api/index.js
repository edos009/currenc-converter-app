import axios from "axios";

const baseURL =
  "https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=USD,EUR,GBP,CZK,PLN,UAH";
const params = { fsym: "USD", tsyms: "USD,EUR,GBP,CZK,PLN,UAH" };

export const getAllCurrencies = () => axios.get(baseURL, null, params);
