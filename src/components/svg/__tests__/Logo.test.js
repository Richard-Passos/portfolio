import { render, screen } from '@testing-library/react';

import Logo from '../Logo';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Logo />', () => {
  it('should render properly', () => {
    render(<Logo data-testid={QUERY_OBJ.id} />);

    const logo = screen.getByTestId(...QUERY);

    expect(logo).toBeInTheDocument();
  });

  const SVG_NAME = 'Logo';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<Logo data-testid={QUERY_OBJ.id} />);

    const logo = screen.getByTestId(...QUERY);

    expect(logo).toHaveAttribute('data-name', SVG_NAME);
  });
});
