import { render, screen } from '@testing-library/react';

import Item from '../Item';
import ContextProvider from '../Root';

const QUERY_OBJ = { role: 'listitem', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Item />', () => {
  it('should render properly', () => {
    render(
      <ContextProvider>
        <Item />
      </ContextProvider>,
    );

    const item = screen.getByRole(...QUERY);

    expect(item).toBeInTheDocument();
  });

  it('should change tag', () => {
    render(
      <ContextProvider>
        <Item asChild>
          <a href='#'>link</a>
        </Item>
      </ContextProvider>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      item = screen.getByRole('link', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(item).toBeInTheDocument();
  });
});
