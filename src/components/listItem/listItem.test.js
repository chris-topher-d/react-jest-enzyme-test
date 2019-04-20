import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils/index';
import ListItem from './ListItem';

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        test('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Example Description'
            };
            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Example Description'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        test('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        test('Should render a title', () => {
            const title = findByTestAtrr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        test('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Example Description'
            };
            wrapper = shallow(<ListItem {...props}/>);
        });

        test('Component is not rendered', () => {
            const component = findByTestAtrr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        });
    });
});