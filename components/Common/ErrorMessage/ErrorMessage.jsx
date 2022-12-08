import React from 'react'
import Image from 'next/image'
import error from 'public/images/error.svg'
import { StyledErrorContainer, StyledErrorMessage, StyledErrorWrapper } from './ErrorMessage.styled'

const ErrorMessage = ({ message }) => {
    return (
        <StyledErrorContainer>
            <StyledErrorWrapper>
                <Image src={error} />
                <StyledErrorMessage>
                    {message}
                </StyledErrorMessage>
            </StyledErrorWrapper>
        </StyledErrorContainer>
    )
}

export default ErrorMessage