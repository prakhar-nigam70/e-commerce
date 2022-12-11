import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const CategoryCard = styled.div`
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
const CategoryImage = styled.div`
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

const CategoryData = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const CategoryTitle = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 500px;
    cursor: pointer;
    line-height: 24px;
`
const CategoryDescription = styled.div`
    width: 100%;
    font-size: 12px;
    line-height: 20px;
`
const CategoryOpenButton = styled.div`
    width: 100px;;
    height: 30px;
    border-radius: 4px;
    background: blue;
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

export default (props) => {
    const {title} = props;
    const navigate = useNavigate();
    return(
        <CategoryCard>
            <CategoryImage>
                <Image onClick={() => navigate('/product-list')} src="/images/categoryCards/electronics.jpg"/>
            </CategoryImage>
            <CategoryData>
                <CategoryTitle onClick={() => navigate('/product-list')}>{title}</CategoryTitle>
                <CategoryDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias laudantium earum nisi, reprehenderit impedit totam quos veritatis laboriosam voluptas vel?</CategoryDescription>
            </CategoryData>
            <CategoryOpenButton onClick={() => navigate('/product-list')}>Go to Category</CategoryOpenButton>
        </CategoryCard>
    )
}