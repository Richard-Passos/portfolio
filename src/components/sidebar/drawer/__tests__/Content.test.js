import { render, screen } from '@testing-library/react';

import Content from '../Content';

const QUERY_OBJ = { role: 'region', options: { name: 'Content' } },
  QUERY = Object.values(QUERY_OBJ);

describe('<Content />', () => {
  it('should render properly', () => {
    render(<Content />);

    const content = screen.getByRole(...QUERY);

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('hidden group-peer-checked:flex');
  });
});
