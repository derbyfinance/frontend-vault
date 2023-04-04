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

export const addSeparatorsToThousands = (number) => {
  number = number?.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(number)) number = number.replace(pattern, '$1,$2');
  return number;
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
  if (error?.includes('ERC20')) {
    return true;
  } else {
    return false;
  }
};

export const getTodayInDDMMYYYYFormat = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedToday = dd + '-' + mm + '-' + yyyy;
  return formattedToday;
};

export const formatDateToMonthDay = (date) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = date.substring(4, 5);
  let newDate = `${monthNames[month]} ${date.substring(0, 2)}`;
  return newDate;
};

export const formatter = Intl.NumberFormat('en', { notation: 'compact' });
export const formatterStandard = Intl.NumberFormat('en', { notation: 'standard' });