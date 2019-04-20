import React from 'react';
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
});