import styled from 'styled-components';
import colors from '../../styles/colors';
import { fontWeightExtraBold } from '../../styles/variables';

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${colors.fillRgba100.blackPrimary};
`;

export const HeaderButton = styled.button`
    color: ${colors.fill.whiteDefault};
    padding: 16px;
    font-weight: ${fontWeightExtraBold};
    text-transform: uppercase;
    letter-spacing: 0.04em;

    &:hover {
        color: ${colors.fill.blueBright};
        background-color: ${colors.fillRgba5.whiteDefault};
    }
`;
