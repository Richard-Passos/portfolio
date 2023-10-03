import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Root';

const QUERY_OBJ = { role: 'button', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Button /> ', () => {
  it('should render properly', () => {
    render(<Button />);

    const button = screen.getByRole(...QUERY);

    expect(button).toBeInTheDocument();
  });

  it('should handle click event', async () => {
    const onClick = jest.fn(),
      user = userEvent.setup();

    render(<Button onClick={onClick} />);

    const button = screen.getByRole(...QUERY);

    await user.click(button);

    expect(onClick).toBeCalled();
  });

  it('should change tag', () => {
    render(
      <Button asChild>
        <a href='#'>link</a>
      </Button>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      button = screen.getByRole('link', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
