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
  return address.slice(0, 6) + '...' + address.slice(-4);
};

export const addSeparators = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export const numberPrettier = (number) => {
  return number.toLocaleString('en-US');
};

export const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

export const notValidNumberInput = (key, number) =>
  !number && key !== 'Backspace' && key !== 'Tab' && key !== '0';

export const helperForERC20Error = (error) => {
  if (error?.includes('execution reverted: ERC20')) {
    return true;
  } else {
    return false;
  }
};
