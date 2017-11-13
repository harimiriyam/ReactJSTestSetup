import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { UserDataForm } from './component-user-form';

it('should correctly render user form', () => {
  const result = renderer.create(
      <UserDataForm />
  );
  expect(result.toJSON()).toMatchSnapshot();
});