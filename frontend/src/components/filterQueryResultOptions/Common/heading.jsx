import React from 'react'
import styled from 'styled-components'

const HeadingText = styled.span`
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 4px;
`

const Heading = ({children}) => {
    return (
        <HeadingText>
            {children}
        </HeadingText>
    )
}

export default Heading;