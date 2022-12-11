import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ChatMessageBadge } from "../HeaderComponent/shared/NavLinks";
import { Message, CrossCircle } from "../icons";

const ChatComponentWrap = styled.div`
    background: blue;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    right: 14px;
    bottom: 20px;
    z-index: 3;
    cursor: pointer;
`
const ChatPopupWrap = styled.div`
    position: fixed;
    right: 54px;
    bottom: 65px;
    z-index: 3;
    width: 220px; 
    border: 0.5px solid #919293;
    height: 250px;
    background: #fff;
    border-radius: 8px 8px 0 8px;
    display: ${props => props.isChatOpen ? 'flex' : 'none'};
    opacity: ${props => props.isChatOpen ? 1 : 0};
    transition: opacity 0.25s ease;
    flex-direction: column;
`
const ChatHeader = styled.div`
    z-index: 3;
    width: 100%; 
    height: 50px;
    background: blue;
    color: #fff;
    border-radius: 8px 8px 0 0;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #122241;
    display: flex;
    align-items: center;
    padding: 0 10px;
`
const ChatMessages = styled.div`
    width: 100%;
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: 250px;

    ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
`
const ChatMessage = styled.div`
    width: max-content;
    max-width: 100%;
    border-radius: ${(props) => props.user? '6px 6px 0 6px': '6px 6px 6px 0'};
    background: ${(props) => props.user? 'rgba(0, 0, 255, 0.8)': 'rgba(0, 0, 0, 0.2)'};
    color: ${(props) => props.user? '#fff': '#000'};
    align-self: ${(props) => props.user? 'flex-end': 'flex-start'};
    margin: 2px 0;
    padding: 2px 6px;
    font-size: 12px;
`
const ChatInputWrap = styled.div`
    height: 95px;
    width: 100%;
`

const TextInput = styled.textarea`
    width: -webkit-fill-available;
    height: 50px;
    padding: 5px 10px;
    font-size: 10px;
    color: #122241;
    margin: 5px 10px;
    resize: none;

    &:focus{
        outline: none;
    }
`

const Submit = styled.div`
    width: 50px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #28a745;
    font-size: 12px;
    font-weight: 700px;
    margin: 0 10px;
    border-radius: 4px;
    cursor: pointer;
`

export default () => {
    const [isChatOpen, setChatOpen] = useState(false);
  
    const toggleChat = () => {
        setChatOpen(!isChatOpen);
    }

    return (
    <>
    <ChatComponentWrap onClick={toggleChat}>
        <ChatMessageBadge bgColor='red' left='2px' top='6px'/>
       {isChatOpen ? <CrossCircle fill='#fff'/> : <Message fill='#fff'/>}
    </ChatComponentWrap>
    <ChatPopupWrap isChatOpen={isChatOpen}>
        <ChatHeader>Let's Chat - Online</ChatHeader>
        <ChatMessages>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
            <ChatMessage user>Message 1</ChatMessage>
            <ChatMessage>Message 1 again!!</ChatMessage>
        </ChatMessages>
        <ChatInputWrap>
            <TextInput placeholder="Your Text Message"/>
            <Submit>Send</Submit>
        </ChatInputWrap>
    </ChatPopupWrap>
    </>
)
}
