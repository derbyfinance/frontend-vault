import React, { useEffect, useState } from 'react';
import HeaderAndDesc from '@components/pageComponents/GamePageComponent/HeaderAndDesc/HeaderAndDesc';
import { AllocationComponentWrapper } from './AllocationComponent.styled';
import BuyComponent from './BuyComponent/BuyComponent';

const AllocationComponent = () => {
  const [summaryData, setSummaryData] = useState<any>();

  useEffect(() => {
    setSummaryData(data);
  }, []);

  const addVaultHandler = (vault: any) => {
    console.log(vault);
    setSummaryData([...summaryData, vault]);
  };

  const deleteVault = (id: any) => {
    setSummaryData(summaryData.filter((vault) => vault.id !== id));
  };


  const [summaryPrice, setSummaryPrice] = useState();
  useEffect(() => {
    setSummaryPrice(
      summaryData?.reduce((accumulator, object) => {
        return accumulator + Number(object.price);
      }, 0),
    );
  }, [summaryData]);

  return (
    <AllocationComponentWrapper>
      <HeaderAndDesc
        header={'Buy NFT'}
        description={'Some information about what and how.'}
      />
      {summaryData && (
        <BuyComponent
          addVaultHandler={addVaultHandler}
          summaryPrice={summaryPrice}
          summaryData={summaryData}
          deleteVault={deleteVault}
        />
      )}
    </AllocationComponentWrapper>
  );
};

export default AllocationComponent;

let data = [
  {
    name: 'USD Coin',
    network: 'Ethereum',
    price: 200,
    percent: 20,
    id: 105600,
  },
];
