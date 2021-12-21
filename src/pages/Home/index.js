import React from 'react';
import {
    BackgroundAnimation,
    BackgroundMain,
    BackgroundReverse,
    HomeWrapper,
    SubTitle,
    Title,
} from './styled';
import { useTranslate } from 'react-translate';

const Home = () => {
    const t = useTranslate('Home');

    return (
        <>
            <HomeWrapper>
                <Title>{t('hello_world')}</Title>
                <SubTitle>{t('try_our_amazing_app')}</SubTitle>
            </HomeWrapper>

            <BackgroundMain />
            <BackgroundReverse />
            <BackgroundAnimation />
        </>
    );
};

export default Home;
