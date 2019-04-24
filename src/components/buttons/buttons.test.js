import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils/index';
import SharedButton from './Buttons';

describe('SharedButton component', () => {
    
    describe('Checking PropTypes', () => {
        test('Should not throw warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };
            wrapper = shallow(<SharedButton {...props}/>);
        });

        test('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});