import React from 'react';
import styled from 'styled-components';
import AttributesFilter from '../../components/filterQueryResultOptions/AttrubutesFilterComponent';
import CategoryFilter from '../../components/filterQueryResultOptions/CategoryFilterComponent';
import PriceFilter from '../../components/filterQueryResultOptions/PriceFilterComponent';
import RatingFilter from '../../components/filterQueryResultOptions/RatingFilterComponent';
import ProductForList from '../../components/ProductForListComponent';
import SortOptions from '../../components/SortOptionsComponent';

const ListPageWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 9fr;
    padding: 25px;
`
const ProductFilterPane = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px 0 0;
`
const ProductLists = styled.div`

`

export default () => {
    return (
        <ListPageWrapper>
            <ProductFilterPane>
                <SortOptions/>
                <PriceFilter/>
                <RatingFilter/>
                <CategoryFilter/>
                <AttributesFilter/>
            </ProductFilterPane>
            <ProductLists>
                <ProductForList/>
            </ProductLists>
        </ListPageWrapper>
    )
}