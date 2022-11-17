import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router'

const LogoWrapper = styled.div`
    grid-column: 1/ 3;
    height: 100%;
`;
const LogoLink = styled.p`
    height: 100%;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImageWrap = styled.div`
    height: 100%;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: fir-content;
`

export default () => {

    const navigate = useNavigate();
    return(
        <LogoWrapper>
            <LogoLink>
                <LogoImageWrap onClick={() => navigate('/')}>
                    E-Commerce
                </LogoImageWrap>
            </LogoLink>
        </LogoWrapper>
    )
}