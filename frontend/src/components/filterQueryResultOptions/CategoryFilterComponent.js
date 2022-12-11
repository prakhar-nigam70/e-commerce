import React from 'react'
import styled from 'styled-components'
import { FilterWrap } from './Common/components'
import Heading from './Common/heading'

const CategoryWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`
const CategoryLabel = styled.label`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const CategoryInput = styled.input`
`
const CategoryText = styled.div`
    width: 100%;
    padding: 0 6px;
    color: green;
    font-size: 14px;
`

const CategoryFilter = (props) => {
    return (
        <FilterWrap>
            <Heading>Category:</Heading>
            <CategoryWrap>
                {[1,2,3,4,5,6].map(i => (
                    <CategoryLabel>
                        <CategoryInput type='checkbox'/>
                        <CategoryText>Category {i}</CategoryText>
                    </CategoryLabel>
                ))}
            </CategoryWrap>
        </FilterWrap>
    )
}

export default CategoryFilter