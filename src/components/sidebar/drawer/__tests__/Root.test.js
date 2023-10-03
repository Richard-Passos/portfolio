import { render, screen } from '@testing-library/react';

import Drawer from '../Root';

const QUERY_OBJ = { id: 'drawer', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Drawer />', () => {
  it('should render properly', () => {
    render(<Drawer data-testid={QUERY_OBJ.id} />);

    const drawer = screen.getByTestId(...QUERY);

    expect(drawer).toBeInTheDocument();
  });

  const EXPECTED_ARIA_LABEL = 'Drawer';
  it(`should have "aria-label" attribute with value "${EXPECTED_ARIA_LABEL}"`, () => {
    render(<Drawer data-testid={QUERY_OBJ.id} />);

    const drawer = screen.getByTestId(...QUERY);

    expect(drawer).toHaveAttribute('aria-label', EXPECTED_ARIA_LABEL);
  });
});
