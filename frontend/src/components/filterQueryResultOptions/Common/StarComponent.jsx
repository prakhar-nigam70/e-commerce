import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    cursor: pointer;
    padding: 0 5px;
    border-radius: 4px;
`;

const Star = styled.span`
    color: ${(props) => props.checked ? 'orange' : 'gray'}
`

const StarRow = ({stars}) => {
    return (
        <Wrap>
            {
                [1,2,3,4,5].map(star => (
                    <Star className="fa fa-star" checked={star <= stars}></Star>
                ))
            }
        </Wrap>
    )
}

export default StarRow;