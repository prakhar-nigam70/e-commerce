import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled, {css} from "styled-components";
import data from './CarouselData'

const CarouselWrap = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;
`
const Slider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => `translateX(-${(props.index)*100}%)`};
`
const Image = styled.img`
    width: 100%;
    height: auto;
    display: inline;
    flex-shrink: 0;
    object-fit: cover;
    object-position: center;
`
const Button = styled.div`
    width: 48px;
    height: 60px;
    position: absolute;
    top: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    &:nth-of-type(1) {
        left: 5%;
    }
    &:nth-of-type(2){
        right: 5%;
    }
    cursor: pointer;
    &:hover{
        opacity: 0.9;
        background: rgba(0,0,0, 0.2);
        svg{
            transform: scale(1.05);
        }
    }
`

const InfoWrap = styled.div`
    z-index: 2;
    text-align: center;
    width: 60%;
    height: auto;
    position: absolute;
    top: 125px;
    margin: 0 20%;
    color: #fff;
`
const Heading = styled.div`
    font-size: 32px;
    line-height: 48px;
    font-weight: 500;
    cursor: pointer;
`
const Tagline = styled.div`
    padding-top: 8px;
    font-size: 20px;
    line-height: 28px;
`
const CarouselPageIndicator = styled.div`
    z-index: 2;
    text-align: center;
    width: 10%;
    height: auto;
    position: absolute;
    bottom: 20px;
    margin: 0 45%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const NavLink = styled.div`
    z-index: 2;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    background-color: ${props => props.active ? '#fff' : 'rgba(0, 0, 0, 0.7)'};
`

export default () => {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const handleDecrease = () => {
        if(index === 0) return setIndex(3);
        setIndex(index-1);
    }
    const handleIncrease = () => {
        if(index === 3) return setIndex(0);
        setIndex(index+1);
    }
    return(
        <CarouselWrap>
            <Button onClick={handleDecrease}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="48" width="24"><path d="M20 44 0 24 20 4l2.8 2.85L5.65 24 22.8 41.15Z"/></svg>
            </Button>
            <Button onClick={handleIncrease}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
            </Button>
            <Slider index={index}>
                <Image crossOrigin="anonymous" src="/images/carousel/furnitures.jpg"/>
                <Image src="/images/carousel/clothing.jpg"/>
                <Image src="/images/carousel/mobile.jpg"/>
                <Image src="/images/carousel/neckties.jpg"/>
            </Slider>
            <InfoWrap>
                <Heading onClick={() => navigate('/product-details')}>{data.SlideTextData[index].Heading}</Heading>
                <Tagline>{data.SlideTextData[index].Tagline}</Tagline>
            </InfoWrap>
            <CarouselPageIndicator index={index}>
                {[0,1,2,3].map(i => <NavLink active={i === index}/>)}
            </CarouselPageIndicator>
        </CarouselWrap>
    )
}