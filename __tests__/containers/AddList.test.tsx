import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {AddList} from '../../src/containers/AddList';

describe('Add list screen', () => {
  const tree = renderer.create(<AddList />);
  test('Addlist screen snapshot created successfully', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Addlist screen rendered successfully', () => {
    expect(tree).toBeTruthy();
  });
});
