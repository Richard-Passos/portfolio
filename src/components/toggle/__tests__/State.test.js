import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import State from '../State';

const QUERY_OBJ = { role: 'checkbox', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<State />', () => {
  it('should render properly', () => {
    render(<State />);

    const state = screen.getByRole(...QUERY);

    expect(state).toBeInTheDocument();
  });

  it('should handle change event', async () => {
    const onChange = jest.fn(),
      user = userEvent.setup();

    render(<State onChange={onChange} />);

    const state = screen.getByRole(...QUERY);

    expect(state).not.toBeChecked();

    await user.click(state);

    expect(onChange).toBeCalled();
    expect(state).toBeChecked();
  });

  it('should be hidden', () => {
    render(<State />);

    const state = screen.getByRole(...QUERY);

    expect(state).toHaveClass('hidden');
  });
});
