import React from "react";
import styled from "styled-components";
import CategoryCardComponent from "../CategoryCardComponent";

const ProductCategoriesComponent = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    padding: 20px;
`

export default () => {

    const categories = [
        { title: "Monitors" },
        { title: "Electronics" },
        { title: "Men's Fashion" },
        { title: "Kid's Fashion" },
        { title: "Women's Fashion" },
        { title: "Household Items" },
        { title: "Beuty and Skin Care" },
        { title: "Hair Care" },
        { title: "Shoes" },
        { title: "Watches" },
        { title: "Sports Wear" },
        { title: "Glasses" },
        { title: "Books and Stationary" },
    ]

    return(
        <ProductCategoriesComponent>
            {categories.map((category, idx) => <CategoryCardComponent key={idx} title={category.title}/>)}
        </ProductCategoriesComponent>
    )
}