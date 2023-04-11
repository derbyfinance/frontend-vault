import React from 'react';
import {
  StyledButton,
  StyledColumnHeader,
  StyledColumnHeaderAllocated,
  StyledColumnHeaderContainer,
  StyledDropDownNetwork,
  StyledTBody,
} from '../BuyComponent.styled';
import TableRowVault from './TableRowVault';

const DropDownNetwork = ({ vaultData, vaultHandler, changeVaultCheckbox }) => {
  return (
    <StyledDropDownNetwork>
      <StyledColumnHeaderContainer>
        <StyledColumnHeader>name</StyledColumnHeader>
        <StyledColumnHeaderAllocated>allocated</StyledColumnHeaderAllocated>
        <StyledColumnHeader>performance</StyledColumnHeader>
      </StyledColumnHeaderContainer>
      <StyledTBody>
        {vaultData &&
          vaultData.map((rowData) => (
            <TableRowVault
              key={rowData.id}
              rowData={rowData}
              changeVaultCheckbox={changeVaultCheckbox}
            />
          ))}
      </StyledTBody>
      <StyledButton onClick={vaultHandler}>Select</StyledButton>
    </StyledDropDownNetwork>
  );
};

export default DropDownNetwork;
