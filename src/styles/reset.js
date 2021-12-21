import { css } from 'styled-components';

const boxReset = css`
    margin: 0;
    border: 0;
    padding: 0;
`;

export const resetAll = css`
    ${boxReset};

    font-family: inherit;
    font-size: 14px;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    vertical-align: baseline;
`;

export const resetBody = resetAll;

export const resetHeading = resetAll;

export const resetParagraph = resetAll;

export const resetButton = css`
    ${resetAll};
    background: transparent;
    cursor: pointer;
    appearance: none;

    &:disabled {
        cursor: default;
    }
`;

export const resetAnchor = css`
    cursor: pointer;
    color: inherit;
    text-decoration: none;
`;

export const resetSelect = css`
    ${resetAll};
    background: transparent;
    appearance: none;
`;

export const resetList = css`
    ${resetAll};
    list-style: none;
`;

export const resetFieldSet = boxReset;

export const resetLegend = boxReset;
