import React from 'react';
import { MainWrapper, Wrapper } from './Styled';
import Header from '../Header';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <MainWrapper>{children}</MainWrapper>
        </Wrapper>
    );
};

MainLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
        .isRequired,
};

export default MainLayout;
