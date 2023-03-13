import styled from "styled-components";

export const StyledErrorContainer = styled.div`
    padding: 15px 20px;
    background-color: ${({ theme }) => theme.colors.errorBackground};
    border-radius: 6px;
    margin-bottom: 30px;
    // width: 300px;
`

export const StyledErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const StyledErrorMessage = styled.div`
    font: ${({ theme }) => theme.fonts.robotoLight};
    font-size: 12px;
`