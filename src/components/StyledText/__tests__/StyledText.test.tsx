import React from 'react';
import renderer from 'react-test-renderer';
import StyledText from '../index';
import { FontName } from '../types';

it('renders correctly', () => {
  const tree = renderer.create(
    <StyledText fontName={FontName.GothamBook} fontSize={16}>Snapshot test!</StyledText>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
