import React from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
    grid-column: 3/ 8;
    height: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchCategories = styled.div`
    flex: 1;
    height: 100%;
    border-radius: 4px 0 0 4px;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #122241;
    font-size: 12px;
    cursor: pointer;
    padding: 0 5px 0 0;
`

const SearchBarComponent = styled.div`
    width: 90%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SearchInput = styled.input`
    flex: 8;
    padding: 4px 8px;
    height: 100%;
    background: #fff;
    border: 1px solid #4a4a4a;
`
const Searchbutton = styled.button`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #d9d927;
    border-radius: 0 4px 4px 0;
    border: 1px solid #4a4a4a;
    transition: all 0.2s;
    cursor: pointer;
    &:hover{
        opacity: 0.95;
        svg{
            scale: 1.04;
        }
    }
`
const SearchOptions = styled.select`
    background: transparent;
    border: none;
    cursor: pointer;
    height: 100%;
    text-align: center;
`
const SearchOption = styled.option`
    font-size: 12px;
`

export default () => {
    return(
        <SearchBarWrapper>
            <SearchBarComponent>
                <SearchCategories>
                    <SearchOptions>
                        <SearchOption>All</SearchOption>
                        <SearchOption>Electronics</SearchOption>
                        <SearchOption>Clothing</SearchOption>
                        <SearchOption>Health Care</SearchOption>
                        <SearchOption>Books</SearchOption>
                    </SearchOptions>
                </SearchCategories>
                <SearchInput type='text' placeholder="Search the shop..."/>
                <Searchbutton type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 48 48"><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"/></svg>
                </Searchbutton>
            </SearchBarComponent>
        </SearchBarWrapper>
    )
}