import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import translations from '../../translations/en.json';
import { TranslatorProvider } from 'react-translate';
import { mount } from 'enzyme';
import Login from '../pages/Login';

const mountedLoginComponent = mount(
    <BrowserRouter>
        <MockedProvider>
            <TranslatorProvider translations={translations}>
                <Login />
            </TranslatorProvider>
        </MockedProvider>
        ,
    </BrowserRouter>,
);

it('render correctly login component', () => {
    const component = renderer.create(
        <BrowserRouter>
            <MockedProvider>
                <TranslatorProvider translations={translations}>
                    <Login />
                </TranslatorProvider>
            </MockedProvider>
            ,
        </BrowserRouter>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('login component has inputs', () => {
    expect(mountedLoginComponent.find('input#email').length).toEqual(1);
    expect(mountedLoginComponent.find('input#password').length).toEqual(1);
});

it('login component has sign in button', () => {
    expect(mountedLoginComponent.find('button').length).toEqual(1);
});
