import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';

import { findByTestAtrr } from '../../utils/index';

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
};

describe('Headline Component', () => {
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };

            wrapper = setup(props);
        });

        test('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'headline-component');
            expect(component.length).toBe(1);
        });

        test('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        test('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        });

        test('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'headline-component');
            expect(component.length).toBe(0);
        });
    });
});