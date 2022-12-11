import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown";
import { useState } from "react";

const NavLinksWrapper = styled.div`
    grid-column: 8/ -1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px 0;
`;

const NavLinkWrap = styled.div`
    color: white;
    height: 100%;
    position: relative;
    cursor: pointer;
    padding: 0 5px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    &:hover{
        border: 1px solid #fff;
    }
`
const NavLink = styled.a`
    height: 100%;
    width: 100%;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CartItemBadge = styled.div`
    width: 16px;
    height: 14px;
    background: red;
    font-size: 8px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ChatMessageBadge = styled.div`
    position: absolute;
    top: 6px;
    right: 2px;
    width: 8px;
    height: 8px;
    background: ${(props) => props.bgColor};
    border-radius: 50%;
    border: 1px solid #fcd303;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => {
        const {left, right, top} = props;
        if(left && top){
            return css`
            left: ${left};
            top: ${top};
        `
        }
        if(right && top){
            return css`
            right: ${right};
            top: ${top};
        `
        }
    }}
`;

const UserNameText = styled.div`
    font-size: 14px;
    width: 100%;
    color: #fff;
`

const DropdownOption = styled.div`
    font-size: 12px;
    color: #000;
`
const SVG = styled.svg`
    width: 24px;
    height: 24px;
    margin-left: 2px;
`

export default () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    const handleDropdown = () => {
        setIsVisible(!isVisible)
    }

    return(
        <NavLinksWrapper>
            <NavLinkWrap>
                <NavLink onClick={() => navigate('/admin/orders')}>Admin</NavLink>
                <ChatMessageBadge bgColor='#f5880c'/>
            </NavLinkWrap>
            <NavLinkWrap>
                <NavLink>Pricing</NavLink>
            </NavLinkWrap>
            <NavLinkWrap onClick={handleDropdown}>
                <UserNameText>John Doe</UserNameText>
                <Dropdown isVisible={isVisible}>
                    <DropdownOption onClick={() => navigate('/user/my-orders')}>My Orders</DropdownOption>
                    <DropdownOption onClick={() => navigate('/user')}>My Profile</DropdownOption>
                    <DropdownOption>Logout</DropdownOption>
                </Dropdown>
            </NavLinkWrap>
            <NavLinkWrap>
                <NavLink onClick={() => navigate('/login')}>Login</NavLink>
            </NavLinkWrap>
            <NavLinkWrap>
                <NavLink onClick={() => navigate('/register')}>Register</NavLink>
            </NavLinkWrap>
            <NavLinkWrap>
                <CartItemBadge>2</CartItemBadge>
                <SVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </SVG>
                <NavLink>Cart</NavLink>
            </NavLinkWrap>
        </NavLinksWrapper>
    )
}