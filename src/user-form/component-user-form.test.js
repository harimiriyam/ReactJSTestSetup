import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MainApp } from '../main-app';

configure({ adapter: new Adapter() });
describe("", () => {
    const initialState = [];
    const mockStore = configureStore();
    let store = mockStore(initialState);
    it('should correctly render user form', () => {
        const result = renderer.create(<Provider store={store}><MainApp /></Provider>);
        expect(result.toJSON()).toMatchSnapshot();
    });

    it('should correctly display the added data to table', () => {
        store = mockStore([{"name" : "Hari", "contact" : 123}]);
        const wrapper = mount(<Provider store={store}><MainApp /></Provider>);
        wrapper.find('.formSubmit').simulate('click');
        expect(wrapper.find('.table-container').length).toEqual(1);
    });
});