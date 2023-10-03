import { render, screen } from '@testing-library/react';

import Text from '../Root';

const QUERY_OBJ = { text: 'text', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Text />', () => {
  it('should render properly', () => {
    render(<Text>{QUERY_OBJ.text}</Text>);

    const text = screen.getByText(...QUERY);

    expect(text).toBeInTheDocument();
  });

  it('should change tag', () => {
    const TEST_ID = 'paragraph';

    render(
      <Text
        asChild
        data-testid={TEST_ID}
      >
        <a
          //rewrite data-testid
          data-testid='link'
          href='#'
        />
      </Text>,
    );

    const prevTag = screen.queryByTestId(TEST_ID),
      text = screen.getByRole('link');

    expect(prevTag).not.toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
