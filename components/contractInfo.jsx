import { useEffect, useState } from 'react';
import axios from 'axios';

const ContractInfo = () => {
  const [exchangeRate, setExchangeRate] = useState('');

  useEffect(() => {
    try {
      axios.get('/api/contract/readContract').then(({ data }) => {
        setExchangeRate(data.exchangeRate);
      }, []);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h4>exchangeRate: {exchangeRate} </h4>
    </div>
  );
};

export default ContractInfo;
