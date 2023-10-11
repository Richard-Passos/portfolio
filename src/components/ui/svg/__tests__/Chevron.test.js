import { render, screen } from '@testing-library/react';

import Chevron from '../Chevron';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Chevron />', () => {
  it('should render properly', () => {
    render(<Chevron data-testid={QUERY_OBJ.id} />);

    const chevron = screen.getByTestId(...QUERY);

    expect(chevron).toBeInTheDocument();
  });

  const SVG_NAME = 'Chevron';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<Chevron data-testid={QUERY_OBJ.id} />);

    const chevron = screen.getByTestId(...QUERY);

    expect(chevron).toHaveAttribute('data-name', SVG_NAME);
  });
});
