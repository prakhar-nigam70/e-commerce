import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import StarRow from "../filterQueryResultOptions/Common/StarComponent";

const ProductCardWrap = styled.div`
    width: 100%;
    // max-width: 300px;
    height: 350px;
    border: .7px solid #122241;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ProductImage = styled.div`
    width: 100%;
    height: 180px;
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`

const ProductData = styled.div`
    width: 100%;
    padding: 10px 0 0 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const ProductTitle = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 500px;
    cursor: pointer;
    line-height: 24px;
`
const ProductDescription = styled.div`
    width: 100%;
    font-size: 12px;
    line-height: 20px;
`
const ProductButtonAndPrice = styled.div`
    width: 100%;
    display: flex;
`
const ProductRating = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 0;
`
const ProductPrice = styled.div`
    padding: 5px;
    flex: 1;
`
const AddToCart = styled.div`
    width: 100px;
    height: 30px;
    border-radius: 4px;
    background: #d9d927;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: scale 0.2s ease;
    &:hover{
        transform: scale(1.02);
        opacity: 0.95;
    }
`

const ProductCard = (props) => {
    const {title} = props;
    const navigate = useNavigate();
    return(
        <ProductCardWrap>
            <ProductImage>
                <Image onClick={() => navigate('/product-details')} src="/images/categoryCards/electronics.jpg"/>
            </ProductImage>
            <ProductData>
                <ProductTitle onClick={() => navigate('/product-details')}>Laptop Acer</ProductTitle>
                <ProductDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias laudantium earum nisi, reprehenderit impedit totam quos veritatis laboriosam voluptas vel?</ProductDescription>
            </ProductData>
            <ProductRating>
                <StarRow stars='4'/>
            </ProductRating>
            <ProductButtonAndPrice>
                <ProductPrice>25$</ProductPrice>
                <AddToCart onClick={() => navigate('/product-details')}>Add To Cart</AddToCart>
            </ProductButtonAndPrice>
        </ProductCardWrap>
    )
}

export default ProductCard;