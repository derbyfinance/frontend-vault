import Image from 'next/image';
import { StyledSingleChainContainer } from './SingleChain.styled';

const SingleChain = ({ chainIcon, chainName }) => {
  return (
    <StyledSingleChainContainer>
      <Image
        src={chainIcon.src}
        height={chainIcon.height}
        width={chainIcon.width}
        layout="intrinsic"
        alt={chainName}
      />
      <div>{chainName}</div>
    </StyledSingleChainContainer>
  );
};

export default SingleChain;
