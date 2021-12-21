import styled from 'styled-components';
import { fontSizeTextXXXL, fontSizeTextXXXXL } from '../../styles/variables';
import colors from '../../styles/colors';

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 24px;
`;

export const Title = styled.h1`
    font-size: ${fontSizeTextXXXXL};
    padding: 12px;
    color: ${colors.fill.grayDark};
    text-transform: capitalize;
`;

export const SubTitle = styled.h2`
    font-size: ${fontSizeTextXXXL};
    padding: 8px;
    color: ${colors.fill.grayDark};
    text-transform: capitalize;
`;

export const BackgroundMain = styled.div`
    animation: slide 4s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    bottom: 0;
    left: -50%;
    opacity: 0.5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
`;

export const BackgroundReverse = styled.div`
    ${BackgroundMain};
    animation-direction: alternate-reverse;
    animation-duration: 4s;
`;

export const BackgroundAnimation = styled.div`
    ${BackgroundMain};
    animation-duration: 5s;
`;
