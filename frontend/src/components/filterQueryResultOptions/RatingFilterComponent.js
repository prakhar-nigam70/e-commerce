import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FilterWrap } from './Common/components'
import Heading from './Common/heading'
import StarRow from './Common/StarComponent'

const RatingSelect = styled.div`
    width: 100%;
    height: 100px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
`

const StarLabel = styled.label`
    width: 100%;
    display: flex;
`
const StarIput = styled.input`
`

const RatingFilter = (props) => {
        return (
        <FilterWrap>
            <Heading>Rating:</Heading>
            <RatingSelect>
            {
                [5,4,3,2,1].map(stars => (
                    <StarLabel>
                        <StarIput type='checkbox'/>
                        <StarRow stars={stars}/>
                    </StarLabel>
                ))
            }
            </RatingSelect>
        </FilterWrap>
    )
}

export default RatingFilter