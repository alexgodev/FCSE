import { css } from 'styled-components';
import colors from './colors';
import { fontFamily } from './variables';
import {
    resetBody,
    resetAnchor,
    resetButton,
    resetParagraph,
    resetSelect,
    resetHeading,
    resetList,
    resetFieldSet,
    resetLegend,
} from './reset';

export default css`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: ${fontFamily};

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;

        color: ${colors.fill.blackPrimary};
        background-color: ${colors.fill.whiteDefault};
    }

    body {
        ${resetBody};

        text-size-adjust: 100%;

        &.lock {
            overflow: hidden;
        }
    }

    html {
        height: 100%;
    }

    body,
    #app {
        min-height: 100vh;
        height: auto;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    a {
        ${resetAnchor};
    }

    button {
        ${resetButton};
    }

    p {
        ${resetParagraph};
    }

    select {
        ${resetSelect};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${resetHeading};
    }

    ul,
    ol {
        ${resetList}
    }

    fieldset {
        ${resetFieldSet}
    }

    legend {
        ${resetLegend}
    }

    .full-screen-container,
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 1025px) {
        .container,
        .container-md,
        .container-sm {
            max-width: 1008px;
        }
    }

    @media (min-width: 1240px) {
        .container,
        .container-lg,
        .container-md,
        .container-sm {
            max-width: 1200px;
        }
    }

    @media (min-width: 1600px) {
        .container,
        .container-xl,
        .container-lg,
        .container-md,
        .container-sm {
            max-width: 1560px;
        }
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .col,
    .col-1,
    .col-10,
    .col-11,
    .col-12,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6,
    .col-7,
    .col-8,
    .col-9,
    .col-auto,
    .col-lg,
    .col-lg-1,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-auto,
    .col-md,
    .col-md-1,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-auto,
    .col-sm,
    .col-sm-1,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-auto,
    .col-xl,
    .col-xl-1,
    .col-xl-10,
    .col-xl-11,
    .col-xl-12,
    .col-xl-2,
    .col-xl-3,
    .col-xl-4,
    .col-xl-5,
    .col-xl-6,
    .col-xl-7,
    .col-xl-8,
    .col-xl-9,
    .col-xl-auto {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }

    /* extra small devices <576 */
    .col {
        flex-basis: 0;
        flex-grow: 1;
        min-width: 0;
        max-width: 100%;
    }

    .col-1 {
        flex: 0 0 8.33%;
        max-width: 8.33%;
    }
    .col-2 {
        flex: 0 0 16.66%;
        max-width: 16.66%;
    }
    .col-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-4 {
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
    .col-5 {
        flex: 0 0 41.66%;
        max-width: 41.66%;
    }
    .col-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .col-7 {
        flex: 0 0 58.33%;
        max-width: 58.33%;
    }
    .col-8 {
        flex: 0 0 66.66%;
        max-width: 66.66%;
    }
    .col-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
    .col-10 {
        flex: 0 0 83.33%;
        max-width: 83.33%;
    }
    .col-11 {
        flex: 0 0 91.66%;
        max-width: 91.66%;
    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-auto {
        flex: 0 0 auto;
        width: 100%;
        max-width: 100%;
    }

    @keyframes slide {
        0% {
            transform: translateX(-25%);
        }
        100% {
            transform: translateX(25%);
        }
    }

    /* small devices >=576 */
    @media (min-width: 576px) {
        .col-sm-1 {
            flex: 0 0 8.33%;
            max-width: 8.33%;
        }
        .col-sm-2 {
            flex: 0 0 16.66%;
            max-width: 16.66%;
        }
        .col-sm-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
        .col-sm-4 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
        }
        .col-sm-5 {
            flex: 0 0 41.66%;
            max-width: 41.66%;
        }
        .col-sm-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-sm-7 {
            flex: 0 0 58.33%;
            max-width: 58.33%;
        }
        .col-sm-8 {
            flex: 0 0 66.66%;
            max-width: 66.66%;
        }
        .col-sm-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        .col-sm-10 {
            flex: 0 0 83.33%;
            max-width: 83.33%;
        }
        .col-sm-11 {
            flex: 0 0 91.66%;
            max-width: 91.66%;
        }
        .col-sm-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .col-sm-auto {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
        }
    }

    /* medium devices >=768 */
    @media (min-width: 768px) {
        .col-md-1 {
            flex: 0 0 8.33%;
            max-width: 8.33%;
        }
        .col-md-2 {
            flex: 0 0 16.66%;
            max-width: 16.66%;
        }
        .col-md-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
        .col-md-4 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
        }
        .col-md-5 {
            flex: 0 0 41.66%;
            max-width: 41.66%;
        }
        .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-md-7 {
            flex: 0 0 58.33%;
            max-width: 58.33%;
        }
        .col-md-8 {
            flex: 0 0 66.66%;
            max-width: 66.66%;
        }
        .col-md-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        .col-md-10 {
            flex: 0 0 83.33%;
            max-width: 83.33%;
        }
        .col-md-11 {
            flex: 0 0 91.66%;
            max-width: 91.66%;
        }
        .col-md-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .col-md-auto {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
        }
    }

    /* large devices >=992 */
    @media (min-width: 992px) {
        .col-lg-1 {
            flex: 0 0 8.33%;
            max-width: 8.33%;
        }
        .col-lg-2 {
            flex: 0 0 16.66%;
            max-width: 16.66%;
        }
        .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
        .col-lg-4 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
        }
        .col-lg-5 {
            flex: 0 0 41.66%;
            max-width: 41.66%;
        }
        .col-lg-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-lg-7 {
            flex: 0 0 58.33%;
            max-width: 58.33%;
        }
        .col-lg-8 {
            flex: 0 0 66.66%;
            max-width: 66.66%;
        }
        .col-lg-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        .col-lg-10 {
            flex: 0 0 83.33%;
            max-width: 83.33%;
        }
        .col-lg-11 {
            flex: 0 0 91.66%;
            max-width: 91.66%;
        }
        .col-lg-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .col-lg-auto {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
        }
    }

    /* extra large devices >= 1200 */
    @media (min-width: 1200px) {
        .col-xl-1 {
            flex: 0 0 8.33%;
            max-width: 8.33%;
        }
        .col-xl-2 {
            flex: 0 0 16.66%;
            max-width: 16.66%;
        }
        .col-xl-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
        .col-xl-4 {
            flex: 0 0 33.33%;
            max-width: 33.33%;
        }
        .col-xl-5 {
            flex: 0 0 41.66%;
            max-width: 41.66%;
        }
        .col-xl-6 {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .col-xl-7 {
            flex: 0 0 58.33%;
            max-width: 58.33%;
        }
        .col-xl-8 {
            flex: 0 0 66.66%;
            max-width: 66.66%;
        }
        .col-xl-9 {
            flex: 0 0 75%;
            max-width: 75%;
        }
        .col-xl-10 {
            flex: 0 0 83.33%;
            max-width: 83.33%;
        }
        .col-xl-11 {
            flex: 0 0 91.66%;
            max-width: 91.66%;
        }
        .col-xl-12 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .col-xl-auto {
            flex: 0 0 auto;
            width: 100%;
            max-width: 100%;
        }
    }
`;
