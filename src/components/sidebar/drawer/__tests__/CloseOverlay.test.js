import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { STATE_ID } from '../../Root';
import CloseOverlay from '../CloseOverlay';

const QUERY_OBJ = { role: 'button', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<CloseOverlay />', () => {
  it('should render properly', () => {
    render(<CloseOverlay />);

    const closeOverlay = screen.getByRole(...QUERY);

    expect(closeOverlay).toBeInTheDocument();
  });

  it(`should have "for" attribute with value "${STATE_ID}"`, () => {
    render(<CloseOverlay />);

    const closeOverlay = screen.getByRole(...QUERY);

    expect(closeOverlay).toHaveAttribute('for', STATE_ID);
  });

  it('should not handle tab focus', async () => {
    const user = userEvent.setup();

    render(<CloseOverlay />);

    const closeOverlay = screen.getByRole(...QUERY);

    await user.tab();

    expect(closeOverlay).not.toHaveFocus();
  });
});
