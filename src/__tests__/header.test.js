import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';
import translations from '../../translations/en.json';
import { TranslatorProvider } from 'react-translate';
import { mount } from 'enzyme';

it('render correctly header component', () => {
    const component = renderer.create(
        <BrowserRouter>
            <MockedProvider>
                <TranslatorProvider translations={translations}>
                    <Header />
                </TranslatorProvider>
            </MockedProvider>
            ,
        </BrowserRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('check menu displayed 2 buttons', () => {
    const component = mount(
        <BrowserRouter>
            <MockedProvider>
                <TranslatorProvider translations={translations}>
                    <Header />
                </TranslatorProvider>
            </MockedProvider>
            ,
        </BrowserRouter>,
    );
    expect(component.find('button').length).toEqual(2);
});
