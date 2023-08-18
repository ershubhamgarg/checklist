import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Checklists} from '../../src/containers/Checklists';

describe('Checklists screen', () => {
  const tree = renderer.create(<Checklists />);
  test('Checklists screen snapshot created successfully', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Checklists screen rendered successfully', () => {
    expect(tree).toBeTruthy();
  });
});
