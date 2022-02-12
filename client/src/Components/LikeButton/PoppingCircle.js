import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
    return <PinkCircleDiv size={size} color={color}></PinkCircleDiv>;
};

const pinkCircleAnimation = keyframes`
    from {
        transform: scale(0.2, 0.2);
        color:"#E790F7";
        opacity: 1;
    }
    to {
        transform: scale(1,1);
        color:"pink";
        opacity: 0;
    }
    `;

const PinkCircleDiv = styled.div`
    animation: ${pinkCircleAnimation} 400ms forwards;
    border-radius: 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: red;
    /* z-index: -1; */
`;

export default PoppingCircle;