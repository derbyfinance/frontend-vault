import axios from 'axios';
import { useEffect, useState } from 'react';

function ContractInfo() {
  const [exchangeRate, setExchangeRate] = useState('');

  useEffect(() => {
    axios.get('/api/contract/readContract').then(({ data }) => {
      setExchangeRate(data.exchangeRate);
    });
  });

  return (
    <div>
      <h4>exchangeRate: {exchangeRate} </h4>
    </div>
  );
}

export default ContractInfo;
