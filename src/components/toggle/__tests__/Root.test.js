import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Toggle from '../Root';

const QUERY_OBJ = { role: 'button', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Toggle />', () => {
  it('should render properly', () => {
    render(<Toggle />);

    const toggle = screen.getByRole(...QUERY);

    expect(toggle).toBeInTheDocument();
  });

  it('should handle tab focus and key press event', async () => {
    const onClick = jest.fn(),
      user = userEvent.setup();

    render(<Toggle onClick={onClick} />);

    const toggle = screen.getByRole(...QUERY);

    await user.tab();
    await user.keyboard('[Enter]');

    expect(toggle).toHaveFocus();
    expect(onClick).toHaveBeenCalled();
  });

  it('should not handle tab focus when tab index is equal to -1', async () => {
    const user = userEvent.setup();

    render(<Toggle tabIndex={-1} />);

    const toggle = screen.getByRole(...QUERY);

    await user.tab();

    expect(toggle).not.toHaveFocus();
  });
});
