import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {PreDepartureList} from '../../src/containers/PreDepartureList';

describe('PreDepartureList screen', () => {
  const tree = renderer.create(<PreDepartureList />);
  test('PreDepartureList screen snapshot created successfully', () => {
    expect(tree).toMatchSnapshot();
  });

  test('PreDepartureList screen rendered successfully', () => {
    expect(tree).toBeTruthy();
  });
});
