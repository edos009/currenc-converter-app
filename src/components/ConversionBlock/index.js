import React from "react";

import styles from "./ConversionBlock.module.scss";

const defaultCurrencies = ["USD", "EUR", "GBP", "PLN", "CZK", "UAH"];

const ConversionBlock = ({
  currency,
  onChangeCurrency,
  value,
  onChangePrice,
}) => {
  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={currency}
        onChange={({ target: { value } }) => onChangeCurrency(value)}
      >
        {defaultCurrencies.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <input
        className={styles.input}
        value={value}
        onChange={({ target: { value } }) => onChangePrice(Number(value))}
      />
    </div>
  );
};

export default ConversionBlock;
