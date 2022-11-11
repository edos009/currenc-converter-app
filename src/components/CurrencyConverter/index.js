import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from "../../reducers/thunks/currenciesThunk";
import ConversionBlock from "../ConversionBlock";

import styles from "./CurrencyConverter.module.scss";

const CurrencyConverter = () => {
  const { currencies } = useSelector((state) => state.currencies);

  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
    // eslint-disable-next-line
  }, []);

  const onChangeFromPrice = (value) => {
    if (currencies.length !== 0) {
      const price = value / currencies[fromCurrency];
      const result = price * currencies[toCurrency];
      setFromPrice(value);
      setToPrice(result);
    }
  };

  const onChangeToPrice = (value) => {
    if (currencies.length !== 0) {
      const result =
        (currencies[fromCurrency] / currencies[toCurrency]) * value;
      setToPrice(value);
      setFromPrice(result);
    }
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
    // eslint-disable-next-line
  }, [toCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
    // eslint-disable-next-line
  }, [fromCurrency]);

  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <ConversionBlock
            value={fromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            onChangePrice={onChangeFromPrice}
          />
          <ConversionBlock
            value={toPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            onChangePrice={onChangeToPrice}
          />
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
