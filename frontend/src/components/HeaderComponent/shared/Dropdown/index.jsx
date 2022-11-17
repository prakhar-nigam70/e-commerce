import React from "react";
import styled from "styled-components";

const Dropdown = styled.div`
    width: 120%;
    z-index: 3;
    border-radius: 4px;
    border: 1px solid #4A4A4A;
    padding: 8px 0;
    background: white;
    position:absolute;
    top: 85%;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    display: ${props => props.isVisible ? 'block' : 'none'};

    div{
        width: 100%;
        text-align: left;
        padding: 4px 4px 4px 8px;
        &:hover{
            background: #05dbf7;
            color: #fff;
        }
    }
`

export default (props) => {
    const {children, isVisible} = props;
    return(
        <Dropdown isVisible={isVisible}>
            {children}
        </Dropdown>
    )
}