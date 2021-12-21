import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Apollo from './Apollo';
import Router from './routes/Router';
import MainLayout from './components/MainLayout';
import { createGlobalStyle } from 'styled-components';
import globalStyle from './styles/global';
import { TranslatorProvider } from 'react-translate';
import translations from '../translations/en.json';

const GlobalStyle = createGlobalStyle`${globalStyle}`;

function App() {
    return (
        <BrowserRouter>
            <Apollo>
                <GlobalStyle />
                <TranslatorProvider translations={translations}>
                    <MainLayout>
                        <Router />
                    </MainLayout>
                </TranslatorProvider>
            </Apollo>
        </BrowserRouter>
    );
}

export default App;
