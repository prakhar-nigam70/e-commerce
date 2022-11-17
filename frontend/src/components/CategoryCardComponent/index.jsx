import React from "react";
import styled from "styled-components";

const CategoryCard = styled.div`
    width: 20%;
    max-width: 300px;
    height: 400px;
    border: .7px solid #122241;
    padding: 5px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CategoryImage = styled.div`
    width: 100%%;
    height: 200px;
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 16px;
    line-height: 24px;
`
const CategoryDescription = styled.div`
    width: 100%;
    font-size: 14px;
    line-height: 20px;
`
const CategoryOpenButton = styled.div`
    width: 100px;;
    height: 30px;
    margin: 15px 0;
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

export default () => {
    return(
        <CategoryCard>
            <CategoryImage>
                <Image src="/images/categoryCards/electronics.jpg"/>
            </CategoryImage>
            <CategoryData>
                <CategoryTitle>Electronics</CategoryTitle>
                <CategoryDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias laudantium earum nisi, reprehenderit impedit totam quos veritatis laboriosam voluptas vel?</CategoryDescription>
            </CategoryData>
            <CategoryOpenButton>Go to Category</CategoryOpenButton>
        </CategoryCard>
    )
}