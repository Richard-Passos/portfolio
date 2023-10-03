import { render, screen } from '@testing-library/react';

import Link from '../Root';

const QUERY_OBJ = { role: 'link', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Link />', () => {
  it('should render properly', () => {
    render(<Link />);

    const link = screen.getByRole(...QUERY);

    expect(link).toBeInTheDocument();
  });

  it('should have "rel" and "target" attributes if it is a external link', () => {
    render(<Link href='https://placeholder.com' />);

    const link = screen.getByRole(...QUERY);

    expect(link).toHaveAttribute('rel');
    expect(link).toHaveAttribute('target');
  });

  it('should not have "rel" and "target" attributes if it is a internal link', () => {
    render(<Link href='./placholder' />);

    const link = screen.getByRole(...QUERY);

    expect(link).not.toHaveAttribute('rel');
    expect(link).not.toHaveAttribute('target');
  });
});
