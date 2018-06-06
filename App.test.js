import React from 'react';
import Main from './src/Main';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Main />).toJSON();
  expect(rendered).toBeTruthy();
});
