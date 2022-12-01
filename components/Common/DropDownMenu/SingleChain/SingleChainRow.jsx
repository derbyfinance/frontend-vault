import Image from 'next/image';
import { StyledSingleChainContainer } from './SingleChainRow.styled';

const SingleChainRow = ({ chainIcon, chainName }) => {
  return (
    <StyledSingleChainContainer>
      <StyledSingleChainIcon>
        <Image src={chainIcon.src} layout="fill" alt={chainName} />
      </StyledSingleChainIcon>
      <div style={{ whiteSpace: 'nowrap' }}>{chainName}</div>
    </StyledSingleChainContainer>
  );
};

export default SingleChainRow;
