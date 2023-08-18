import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {EditList} from '../../src/containers/EditList';

describe('EditList screen', () => {
  const tree = renderer.create(<EditList />);
  test('EditList screen snapshot created successfully', () => {
    expect(tree).toMatchSnapshot();
  });

  test('EditList screen rendered successfully', () => {
    expect(tree).toBeTruthy();
  });
});
