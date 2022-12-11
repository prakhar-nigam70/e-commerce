import React, { useState } from 'react'
import styled from 'styled-components'
import { FilterWrap } from './Common/components'
import Heading from './Common/heading'

const SliderComponent = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
`
const TextSpan = styled.div`
    font-size: 12px;
    line-height: 14px;
`
const Slider = styled.input`
    width: 80%;
`

const PriceFilter = (props) => {
    const [maxPrice, setmaxPrice] = useState('10000')
    return (
        <FilterWrap>
            <TextSpan>
               <Heading>Maximum Price Upto:</Heading>  Rs {maxPrice}
            </TextSpan>
            <SliderComponent>
                <Slider type="range" min="100" max="25000" value={maxPrice} onChange={(e) => setmaxPrice(e.target.value)}/>
            </SliderComponent>
        </FilterWrap>
    )
}

export default PriceFilter