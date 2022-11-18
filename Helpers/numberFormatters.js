export const currencyFormatter = (value, currency = 'usd') => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    style: 'currency',
    currency,
  }).format(value);
};

export const percentFormatter = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumIntegerDigits: 1,
  }).format(value);
};
