import React from 'react';
import {count, Operation} from './Counter';

it('renders learn react link', () => {
  const a = count(1, 2, Operation.Add);

  expect(a).toBe(3);
});
