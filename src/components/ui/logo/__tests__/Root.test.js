import { render, screen } from '@testing-library/react';

import Logo from '../Root';

const QUERY_OBJ = { role: 'link', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Logo />', () => {
  it('should render properly', () => {
    render(<Logo />);

    const logo = screen.getByRole(...QUERY);

    expect(logo).toBeInTheDocument();
  });

  it('should have an "href" attribute with value "/"', () => {
    render(<Logo />);

    const logo = screen.getByRole(...QUERY);

    expect(logo).toHaveAttribute('href', '/');
  });
});
