import { render, screen } from '@testing-library/react';

import Title from '../Title';

const QUERY_OBJ = { role: 'heading', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Title />', () => {
  it('should render properly', () => {
    render(<Title />);

    const title = screen.getByRole(...QUERY);

    expect(title).toBeInTheDocument();
  });

  it('should change tag', () => {
    render(
      <Title asChild>
        <a href='#'>link</a>
      </Title>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      title = screen.getByRole('link', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
