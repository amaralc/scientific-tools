import { render } from '@testing-library/react';

import Tree from '../pages/tree';

describe('Tree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tree />);
    expect(baseElement).toBeTruthy();
  });
});
