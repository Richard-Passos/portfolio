import { render, screen } from '@testing-library/react';

import Close from '../Close';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Close />', () => {
  it('should render properly', () => {
    render(<Close data-testid={QUERY_OBJ.id} />);

    const close = screen.getByTestId(...QUERY);

    expect(close).toBeInTheDocument();
  });

  const SVG_NAME = 'Close';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<Close data-testid={QUERY_OBJ.id} />);

    const close = screen.getByTestId(...QUERY);

    expect(close).toHaveAttribute('data-name', SVG_NAME);
  });
});
