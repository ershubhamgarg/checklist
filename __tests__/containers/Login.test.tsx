import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from '../../src/containers/Login';

describe('Login screen', () => {
  const tree = renderer.create(<Login />);
  test('Login screen snapshot created successfully', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Login screen rendered successfully', () => {
    expect(tree).toBeTruthy();
  });
});
