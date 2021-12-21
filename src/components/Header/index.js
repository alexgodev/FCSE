import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderButton, HeaderWrapper } from './Styled';
import useAuthUser from '../../hooks/useAuthUser';
import { useTranslate } from 'react-translate';

const Header = () => {
    const { isAuth } = useAuthUser();
    const t = useTranslate('Header');

    return (
        <HeaderWrapper>
            <Link to="/">
                <HeaderButton>{t('home')}</HeaderButton>
            </Link>
            {isAuth ? (
                <Link to="profile">
                    <HeaderButton>{t('profile')}</HeaderButton>
                </Link>
            ) : (
                <Link to="login">
                    <HeaderButton>{t('login')}</HeaderButton>
                </Link>
            )}
        </HeaderWrapper>
    );
};

export default Header;
