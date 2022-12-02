export const currencyFormatter = (value, currency = 'usd') => {
  if (typeof value !== 'number') {
    return '';
  }

  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    style: 'currency',
    currency,
  }).format(value);
};

export const percentageFormatter = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(value / 100);
};

export const hideMiddleCharacters = (address) => {
  return address.slice(0, 4) + '...' + address.slice(-4);
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
