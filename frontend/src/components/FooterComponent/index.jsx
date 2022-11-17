import React from "react";
import styled from "styled-components";

const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 120px;
    background: #131921;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FooterText = styled.span`
    color: #fff;
    background: inherit;
`

export default () => {
    return <Footer>
                <FooterText>
                    Copyright &copy; Best E-commerce shop
                </FooterText>
            </Footer>
}