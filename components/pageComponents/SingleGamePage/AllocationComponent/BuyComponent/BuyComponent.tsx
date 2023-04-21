import React, { FC, useEffect, useRef, useState } from 'react';
import HeaderAndDesc from '@components/pageComponents/GamePageComponent/HeaderAndDesc/HeaderAndDesc';
import BtnArrow from '@components/pageComponents/VaultsPage/VaultsPageHero/BtnArrow';
import {
  notValidNumberInput,
  notValidNumberInputDet,
} from '@helpers/helperFunctions';
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
  BuyComponentContainer,
  BuyComponentWrapper,
  StyledAddInputInfo,
  StyledHeader,
  StyledNetworkSelect,
} from './BuyComponent.styled';
import DropDownNetwork from './components/DropDownNetwork';
import { setNetwork, sortAllocations } from './utils';

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

  const [derbyBalance, setDerbyBalance] = useState<number>(1000);

  const [allocations, setAllocations] = useState<any>([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const networkDropdownSelect: React.MutableRefObject<any> = useRef();
  const vaultDropdownSelect: React.MutableRefObject<any> = useRef();

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
    if (amountValue.includes('.')) {
      if (notValidNumberInput(e.key, number)) e.preventDefault();
    } else {
      if (notValidNumberInputDet(e.key, number)) e.preventDefault();
    }
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
      setAmountValue('');
      setSelectNetwork(null);
      setSelectVault(null);
    }
  };
  useEffect(() => {
    const handler = (e: Event) => {
      if (
        !vaultDropdownSelect.current?.contains(e.target) &&
        !vaultDropdown.current?.contains(e.target)
      ) {
        setOpenVault(false);
      }
      if (
        !networkDropdownSelect.current?.contains(e.target) &&
        !networkDropdown.current?.contains(e.target)
      ) {
        if (openNetwork) {
        }
        setOpenNetwork(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (typeof percent == 'string') {
      setAmountValue(derbyBalance);
    } else {
      setAmountValue((derbyBalance * percent) / 100);
    }
  };

  const getAllocations = () => {
    const getNetworkData = setNetwork(summaryData);
    const resOfSortAllocations = sortAllocations(getNetworkData);
    console.log(resOfSortAllocations);
  };

  return (
    <BuyComponentContainer>
      <BuyComponentWrapper>
        <div>
          <StyledHeader>
            <Image src={NetworkIcon} alt="NetworkIcon" />
            <span>Network</span>
          </StyledHeader>
          <StyledNetworkSelect
            ref={networkDropdownSelect}
            onClick={() => setOpenNetwork(!openNetwork)}
          >
            <div>
              {selectNetwork != null
                ? selectNetwork.name
                : 'All networks selected'}
            </div>

            <BtnArrow open={openNetwork} />
          </StyledNetworkSelect>
        </div>
        {openNetwork && (
          <div ref={networkDropdown}>
            <DropDownNetwork
              vaultData={networksData}
              vaultHandler={networkHandler}
              changeVaultCheckbox={changeNetworkCheckbox}
            />
          </div>
        )}
        <div>
          <StyledHeader>
            <Image src={VaultIcon} alt="VaultIcon" />
            <span>Vault</span>
          </StyledHeader>
          <StyledNetworkSelect
            ref={vaultDropdownSelect}
            onClick={() => setOpenVault(!openVault)}
          >
            <div>
              {selectVault != null ? selectVault.name : 'Select a Vault'}
            </div>
            <BtnArrow open={openVault} />
          </StyledNetworkSelect>
        </div>
        {openVault && (
          <div ref={vaultDropdown}>
            <DropDownNetwork
              vaultData={vaultData}
              vaultHandler={vaultHandler}
              changeVaultCheckbox={changeVaultCheckbox}
            />
          </div>
        )}
        <div>
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
        </div>
        <StylesPercentBoxContainer>
          {percentData.map((box) => (
            <StylesPercentBox
              onClick={() => changePercentage(box.value)}
              key={box.value}
              color={box.color}
            >
              {box.value}
              {typeof box.value !== 'string' && '%'}
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
          <StyledBuyButton onClick={getAllocations}>
            Buy now {summaryPrice ? summaryPrice : 0} DRB
          </StyledBuyButton>
        </SummaryComponentWrapper>
      )}
    </BuyComponentContainer>
  );
};

export default BuyComponent;

export type IAllocation = {
  name: string;
  network: string;
  price: number;
  percent: string;
  id: number;
};

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
    name: 'USD Coin',
    allocated: 9_900_000,
    performance: 6.1,
    checked: false,
  },
  {
    id: 24,
    name: 'USD Tether',
    allocated: 7_310_000,
    performance: 6.32,
    checked: false,
  },
  {
    id: 5,
    name: 'DAI',
    allocated: 11_540_000,
    performance: 12.5,
    checked: false,
  },
  {
    id: 47,
    name: 'Ethereum',
    allocated: 9_900_000,
    performance: 6.1,
    checked: false,
  },
  {
    id: 25,
    name: 'Wrapped Bitcoin',
    allocated: 7_310_000,
    performance: 6.32,
    checked: false,
  },
];
