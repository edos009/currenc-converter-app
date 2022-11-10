import React from "react";

const defaultCurrencies = ["USD", "EUR", "GBP", "PLN", "CZK", "UAH"];

const ConversionBlock = ({
  currency,
  onChangeCurrency,
  value,
  onChangePrice,
}) => {
  return (
    <div>
      <select
        value={currency}
        onChange={({ target: { value } }) => onChangeCurrency(value)}
      >
        {defaultCurrencies.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <input
        value={value}
        onChange={({ target: { value } }) => onChangePrice(Number(value))}
      />
    </div>
  );
};

export default ConversionBlock;
