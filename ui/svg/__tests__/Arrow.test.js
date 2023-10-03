import { render, screen } from '@testing-library/react';

import Arrow from '../Arrow';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Arrow />', () => {
  it('should render properly', () => {
    render(<Arrow data-testid={QUERY_OBJ.id} />);

    const arrow = screen.getByTestId(...QUERY);

    expect(arrow).toBeInTheDocument();
  });

  const SVG_NAME = 'Arrow';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<Arrow data-testid={QUERY_OBJ.id} />);

    const arrow = screen.getByTestId(...QUERY);

    expect(arrow).toHaveAttribute('data-name', SVG_NAME);
  });
});
