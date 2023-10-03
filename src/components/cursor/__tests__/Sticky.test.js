import { render, screen } from '@testing-library/react';

import Sticky from '../Sticky';

const QUERY_OBJ = { role: 'button', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Sticky />', () => {
  it('should render properly', () => {
    render(
      <Sticky>
        <button />
      </Sticky>,
    );

    const sticky = screen.getByRole(...QUERY);

    expect(sticky).toBeInTheDocument();
  });

  it("should render as it's child", () => {
    const href = '#';

    render(
      <Sticky>
        <a href={href} />
      </Sticky>,
    );

    const sticky = screen.getByRole('link', QUERY_OBJ.options);

    expect(sticky).toBeInTheDocument();
    expect(sticky).toHaveAttribute('href', href);
  });
});
