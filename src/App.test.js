import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from './utils';
import React from 'react';

const setup = (initialState) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example Title 1',
                body: 'Example Body'
            },
            {
                title: 'Example Title 2',
                body: 'Example Body'
            },
            {
                title: 'Example Title 3',
                body: 'Example Body'
            }]
        };
        wrapper = setup(initialState);
    });

    test('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
})