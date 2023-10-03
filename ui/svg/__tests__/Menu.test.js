import { render, screen } from '@testing-library/react';

import Menu from '../Menu';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Menu />', () => {
  it('should render properly', () => {
    render(<Menu data-testid={QUERY_OBJ.id} />);

    const menu = screen.getByTestId(...QUERY);

    expect(menu).toBeInTheDocument();
  });

  const SVG_NAME = 'Menu';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<Menu data-testid={QUERY_OBJ.id} />);

    const menu = screen.getByTestId(...QUERY);

    expect(menu).toHaveAttribute('data-name', SVG_NAME);
  });
});
