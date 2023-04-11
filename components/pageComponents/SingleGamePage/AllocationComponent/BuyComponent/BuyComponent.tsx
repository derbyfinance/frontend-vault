import React, { FC, useEffect, useRef, useState } from 'react';
import HeaderAndDesc from '@components/pageComponents/GamePageComponent/HeaderAndDesc/HeaderAndDesc';
import BtnArrow from '@components/pageComponents/VaultsPage/VaultsPageHero/BtnArrow';
import { notValidNumberInput } from '@helpers/helperFunctions';
import NetworkIcon from '@icons/NetworkIcon.svg';
import VaultIcon from '@icons/VaultIcon.svg';
import USDCIcon from '@icons/usdc.svg';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import {
  StylesOutlineButton,
  StylesPercentBox,
  StylesPercentBoxContainer,
} from '../AllocationComponent.styled';
import ItemContainer from '../SummaryComponent/ItemContainer';
import {
  StyledBuyButton,
  SummaryComponentWrapper,
} from '../SummaryComponent/SummaryComponent.styled';
import AmountInput from '../input/AmountInput';
import {
  BuyComponentWrapper,
  StyledAddInputInfo,
  StyledHeader,
  StyledNetworkSelect,
} from './BuyComponent.styled';
import DropDownNetwork from './components/DropDownNetwork';

type IBuyComponent = {
  addVaultHandler: Function;
  summaryPrice: number;
  summaryData: any;
  deleteVault: Function;
};

const BuyComponent: FC<IBuyComponent> = ({
  addVaultHandler,
  summaryPrice,
  summaryData,
  deleteVault,
}) => {
  const [openNetwork, setOpenNetwork] = useState(false);
  const [openVault, setOpenVault] = useState(false);
  const [amountValue, setAmountValue] = useState<any>('');

  const [networksData, setNetworksData] = useState<INetworksData[]>();
  const [vaultData, setVaultData] = useState<IMockVault[]>();

  const [selectNetwork, setSelectNetwork] = useState<INetworksData>();
  const [selectVault, setSelectVault] = useState<IMockVault>();

  const networkDropdown: React.MutableRefObject<any> = useRef();
  const vaultDropdown: React.MutableRefObject<any> = useRef();

  const { isConnected } = useAccount();
  const [connected, setConnected] = useState<boolean>();

  useEffect(() => {
    setConnected(isConnected);
  }, [isConnected]);

  useEffect(() => {
    setNetworksData(NetworksData);
    setVaultData(mockVault);
  }, []);

  const validateInput = (e) => {
    const number = Number(e.key);
    if (notValidNumberInput(e.key, number)) e.preventDefault();
  };

  const changeNetworkCheckbox = (value: any) => {
    setNetworksData(
      networksData.map((item) => {
        if (item.id === value) {
          if (item.checked) return { ...item, checked: false };
          if (!item.checked) return { ...item, checked: true };
        } else {
          if (item.checked) return { ...item, checked: false };
          return item;
        }
      }),
    );
  };

  const changeVaultCheckbox = (value: any) => {
    setVaultData(
      vaultData.map((item) => {
        if (item.id === value) {
          if (item.checked) return { ...item, checked: false };
          if (!item.checked) return { ...item, checked: true };
        } else {
          if (item.checked) return { ...item, checked: false };
          return item;
        }
      }),
    );
  };

  const networkHandler = () => {
    let networks = networksData.filter((item) => item.checked);
    if (networks.length !== 0) {
      setSelectNetwork(networks[0]);
      setOpenNetwork(false);
    }
  };

  const vaultHandler = () => {
    let vaults = vaultData.filter((item) => item.checked);
    if (vaults.length !== 0) {
      setSelectVault(vaults[0]);
      setOpenVault(false);
    }
  };

  const addVaultsAnotherHandler = () => {
    if (
      amountValue == null ||
      selectNetwork == undefined ||
      selectVault == undefined
    ) {
      return;
    } else {
      addVaultHandler({
        name: selectVault.name,
        network: selectNetwork.name,
        price: amountValue,
        percent: '20',
        id: selectNetwork.id * selectVault.id * amountValue,
      });
      setAmountValue(0);
      setSelectNetwork(null);
      setSelectVault(null);
    }
  };
  // useEffect(() => {
  //   const handler = (e: Event) => {
  //     if (
  //       !vaultDropdown.current?.contains(e.target) &&
  //       !networkDropdown.current?.contains(e.target)
  //     ) {
  //       setOpenVault(false);
  //       setOpenNetwork(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handler);
  //   return () => document.removeEventListener('mousedown', handler);
  // }, []);
  const updateVault = (id: any) => {
    let updatedVault = summaryData.filter((vault: any) => vault.id == id);
    let networkUpdate = networksData.filter(
      (vault: any) => vault.name == updatedVault[0].network,
    );
    let vaultUpdate = mockVault.filter(
      (vault: any) => vault.name == updatedVault[0].name,
    );
    console.log(networkUpdate);
    setSelectNetwork(networkUpdate[0]);
    setSelectVault(vaultUpdate[0]);
    changeVaultCheckbox(id);
    changeNetworkCheckbox(networkUpdate[0].id);
    setAmountValue(Number(updatedVault[0].price));
    deleteVault(id);
  };

  const changePercentage = (percent) => {
    // setAmountValue();
    console.log(percent);
  };

  return (
    <>
      <BuyComponentWrapper>
        <StyledHeader>
          <Image src={NetworkIcon} alt="NetworkIcon" />
          <span>Network</span>
        </StyledHeader>
        <StyledNetworkSelect
          ref={networkDropdown}
          onClick={() => setOpenNetwork(!openNetwork)}
        >
          <div>
            {selectNetwork != null
              ? selectNetwork.name
              : 'All networks selected'}
          </div>

          <BtnArrow open={openNetwork} />
        </StyledNetworkSelect>
        {openNetwork && (
          <DropDownNetwork
            vaultData={networksData}
            vaultHandler={networkHandler}
            changeVaultCheckbox={changeNetworkCheckbox}
          />
        )}
        <StyledHeader>
          <Image src={VaultIcon} alt="VaultIcon" />
          <span>Vault</span>
        </StyledHeader>
        <StyledNetworkSelect
          ref={vaultDropdown}
          onClick={() => setOpenVault(!openVault)}
        >
          <div>{selectVault != null ? selectVault.name : 'Select a Vault'}</div>
          <BtnArrow open={openVault} />
        </StyledNetworkSelect>
        {openVault && (
          <DropDownNetwork
            vaultData={vaultData}
            vaultHandler={vaultHandler}
            changeVaultCheckbox={changeVaultCheckbox}
          />
        )}
        <StyledHeader>Amount</StyledHeader>
        <AmountInput
          placeholder="0.0"
          onKeyDown={validateInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmountValue(e.target.value)
          }
          value={amountValue}
          endAddOn={
            <StyledAddInputInfo>
              <span>DRB</span> <Image src={USDCIcon} alt="USDCIcon" />
            </StyledAddInputInfo>
          }
        />
        <StylesPercentBoxContainer>
          {percentData.map((box) => (
            <StylesPercentBox
              onClick={() => changePercentage(box.value)}
              key={box.value}
              color={box.color}
            >
              {box.value}%
            </StylesPercentBox>
          ))}
        </StylesPercentBoxContainer>
        <StylesOutlineButton
          disabled={!connected}
          disable={!connected}
          onClick={addVaultsAnotherHandler}
        >
          + Save and Add another vault
        </StylesOutlineButton>
      </BuyComponentWrapper>
      <HeaderAndDesc
        header={'Summary'}
        description={'Some information about what and how.'}
      />
      {summaryData && (
        <SummaryComponentWrapper>
          {summaryData.map((item: any) => (
            <ItemContainer
              key={item.id}
              name={item.name}
              network={item.network}
              id={item.id}
              price={item.price}
              deleteVault={deleteVault}
              updateVault={updateVault}
              summaryPrice={summaryPrice}
            />
          ))}
          <StyledBuyButton>
            Buy now {summaryPrice ? summaryPrice : 0} DRB
          </StyledBuyButton>
        </SummaryComponentWrapper>
      )}
    </>
  );
};

export default BuyComponent;

const percentData = [
  {
    value: 20,
    color: '#79A9DD',
  },
  {
    value: 40,
    color: '#659CD8',
  },
  {
    value: 60,
    color: '#2F7ACB',
  },
  {
    value: 80,
    color: '#3C82CE',
  },
  {
    value: 'MAX',
    color: '#79A9DD',
  },
];

type INetworksData = {
  id: number;
  name: string;
  allocated: number;
  checked: boolean;
};

const NetworksData: INetworksData[] = [
  {
    id: 22,
    name: 'Ethereum',
    allocated: 9_900_000,
    checked: false,
  },
  {
    id: 70,
    name: 'Polygon',
    allocated: 7_310_000,
    checked: false,
  },
  {
    id: 43,
    name: 'Arbitrum One',
    allocated: 11_540_000,
    checked: false,
  },
  {
    id: 65,
    name: 'Arbitrum Goerli',
    allocated: 1_440_000,
    checked: false,
  },
  {
    id: 30,
    name: 'Optimism',
    allocated: 981_000,
    checked: false,
  },
  {
    id: 11,
    name: 'Goerli',
    allocated: 7_310_000,
    checked: false,
  },
];
type IMockVault = {
  id: number;
  name: string;
  allocated: number;
  performance: number;
  checked: boolean;
};

const mockVault: IMockVault[] = [
  {
    id: 84,
    name: 'USDC yVault',
    allocated: 9_900_000,
    performance: 6.1,
    checked: false,
  },
  {
    id: 24,
    name: 'USDC Coin',
    allocated: 7_310_000,
    performance: 6.32,
    checked: false,
  },
  {
    id: 5,
    name: 'dUSDC',
    allocated: 11_540_000,
    performance: 12.5,
    checked: false,
  },
  {
    id: 47,
    name: 'USDC yVault',
    allocated: 9_900_000,
    performance: 6.1,
    checked: false,
  },
  {
    id: 25,
    name: 'USDC Coin',
    allocated: 7_310_000,
    performance: 6.32,
    checked: false,
  },
];
