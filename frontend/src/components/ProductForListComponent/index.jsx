import React from 'react'
import styled, {css} from 'styled-components'
import ProductCard from '../ProductComponent'

const ProductsListWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    height: 100%;
`

const ProductForList = (props) => {
    return (
        <ProductsListWrap>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </ProductsListWrap>
    )
}

export default ProductForList;