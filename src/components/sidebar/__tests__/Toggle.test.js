import { render, screen } from '@testing-library/react';

import { STATE_ID } from '../Root';
import Toggle from '../Toggle';

const QUERY_OBJ = { role: 'button', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Toggle />', () => {
  it('should render properly', () => {
    render(<Toggle />);

    const toggle = screen.getByRole(...QUERY);

    expect(toggle).toBeInTheDocument();
  });

  it(`should have "for" attribute with value "${STATE_ID}"`, () => {
    render(<Toggle />);

    const toggle = screen.getByRole(...QUERY);

    expect(toggle).toHaveAttribute('for', STATE_ID);
  });
});
