import { render, screen } from '@testing-library/react';

import Inner from '../Inner';

const QUERY_OBJ = { role: 'list', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Inner />', () => {
  it('should render properly', () => {
    render(<Inner />);

    const inner = screen.getByRole(...QUERY);

    expect(inner).toBeInTheDocument();
  });

  it('should change tag', () => {
    render(
      <Inner asChild>
        <nav />
      </Inner>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      inner = screen.getByRole('navigation', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(inner).toBeInTheDocument();
  });
});
