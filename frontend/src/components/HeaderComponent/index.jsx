import React from "react";
import styled from 'styled-components';
import Logo from "./shared/Logo";
import NavLinks from "./shared/NavLinks";
import SearchBar from "./shared/SearchBar";

const HeaderWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    width: 100%;
    height: 50px;
    background: #131921;
    color: #fff;
`

export default () => {
    return (
        <HeaderWrap>
            <Logo/>
            <SearchBar/>
            <NavLinks/>
        </HeaderWrap>
    )
}