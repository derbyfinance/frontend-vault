import styled from "styled-components"

export const StyledSingleVaultInfoContainer = styled.div`
    display: flex;
    gap: 16px;
    & > :last-child {
        border-right: none;
    }
`
export const StyledBlockWrapper = styled.div`
    padding: 20px;
    border-right: 1px solid ${({ theme }) => theme.colors.borderMain};
`
export const StyledBlockInfo = styled.div`
    display: flex;
    pad: 6px;
    align-items: flex-start;
`
export const StyledValue = styled.div`
    font: ${({ theme }) => theme.fonts.robotoMedium};
    font-size: 32px;
`

export const StyledTextPart = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const StyledValueAndChange = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const StyledChangeLabel = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 6px;
    gap: 4px;
    background-color: ${({ theme }) => theme.colors.chageLabelGreen};
    border-radius: 6px;
`
export const StyledBlockDescription = styled.div`
font: ${({ theme }) => theme.fonts.robotoMedium};
color: ${({ theme }) => theme.colors.textFaded};
font-size: 16px;
`
