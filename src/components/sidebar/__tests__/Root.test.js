import { render, screen } from '@testing-library/react';

import Sidebar from '../Root';

const QUERY_OBJ = { role: 'complementary', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Sidebar />', () => {
  it('should render properly', () => {
    render(<Sidebar />);

    const sidebar = screen.getByRole(...QUERY);

    expect(sidebar).toBeInTheDocument();
  });

  const CHECKBOX_EXPECTED_ID = 'sidebar-toggle';
  it(`should contain a checkbox with id "${CHECKBOX_EXPECTED_ID}"`, () => {
    render(<Sidebar />);

    const sidebar = screen.getByRole(...QUERY),
      checkbox = sidebar.querySelector('input[type=checkbox]');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', CHECKBOX_EXPECTED_ID);
  });
});
