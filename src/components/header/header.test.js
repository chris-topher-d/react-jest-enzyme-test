import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils/index';
import Header from './Header';

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />);
    // console.log(component.debug());
    return component;
};


describe('Header Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });

    test('Should render without errors', () => {
        const container = component.find('.header-component');
        expect(container.length).toBe(1);
    });

    test('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'header-logo');
        expect(logo.length).toBe(1);
    });
});