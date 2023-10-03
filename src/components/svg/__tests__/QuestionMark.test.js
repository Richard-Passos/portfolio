import { render, screen } from '@testing-library/react';

import QuestionMark from '../QuestionMark';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<QuestionMark />', () => {
  it('should render properly', () => {
    render(<QuestionMark data-testid={QUERY_OBJ.id} />);

    const questionMark = screen.getByTestId(...QUERY);

    expect(questionMark).toBeInTheDocument();
  });

  const SVG_NAME = 'Question mark';
  it(`should have "data-name" with value "${SVG_NAME}"`, () => {
    render(<QuestionMark data-testid={QUERY_OBJ.id} />);

    const questionMark = screen.getByTestId(...QUERY);

    expect(questionMark).toHaveAttribute('data-name', SVG_NAME);
  });
});
