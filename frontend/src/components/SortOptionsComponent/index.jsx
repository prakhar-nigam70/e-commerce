import React from 'react'
import styled from 'styled-components'
import { FilterWrap } from '../filterQueryResultOptions/Common/components'

const SearchCategories = styled.div`
    width: 150px;
    height: 30px;
    border-radius: 4px;
    border: 1px solid #122241;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #122241;
    font-size: 12px;
    cursor: pointer;
    padding: 0 5px 0 0;
`
const SearchOptions = styled.select`
    width: 150px;
    background: transparent;
    border: none;
    cursor: pointer;
    height: 100%;
    text-align: center;
    &:focus{
        outline: none;
    }
`
const SearchOption = styled.option`
    font-size: 13px;
    padding: 4px;
    text-align: left;
`

const SortOptions = (props) => {
    return (
        <FilterWrap>
            <SearchCategories>
                    <SearchOptions>
                        <SearchOption>Sort By</SearchOption>
                        <SearchOption value='price_1'>Price: Low to High</SearchOption>
                        <SearchOption value='price_-1'>Price: High to Low</SearchOption>
                        <SearchOption value='rating_-1'>Customer rating</SearchOption>
                        <SearchOption value='name_1'>Name A-Z</SearchOption>
                        <SearchOption value='name_-1'>Name Z-A</SearchOption>
                    </SearchOptions>
                </SearchCategories>
        </FilterWrap>
    )
}

export default SortOptions