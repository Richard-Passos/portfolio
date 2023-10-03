import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Prev from '../Prev';
import { CarouselContext } from '../Root';

const QUERY_OBJ = { role: 'button', options: { name: /^Prev/ } },
  QUERY = Object.values(QUERY_OBJ);

const Provider = ({ dispatch, ...props }) => {
  dispatch = dispatch || jest.fn();

  return (
    <CarouselContext.Provider
      value={{ dispatch }}
      {...props}
    />
  );
};

describe('<Prev />', () => {
  it('should render properly', () => {
    render(
      <Provider>
        <Prev />
      </Provider>,
    );

    const prev = screen.getByRole(...QUERY);

    expect(prev).toBeInTheDocument();
  });

  it('should change tag', () => {
    render(
      <Provider>
        <Prev asChild>
          <a href='#'>Prev</a>
        </Prev>
      </Provider>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      prev = screen.getByRole('link', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(prev).toBeInTheDocument();
  });

  const TYPE_EXPECTED = 'decrement';
  it(`should on click event call dispatch with type equal to ${TYPE_EXPECTED}`, async () => {
    let type = '';

    const dispatch = jest.fn((action) => (type = action.type)),
      user = userEvent.setup();

    render(
      <Provider dispatch={dispatch}>
        <Prev />
      </Provider>,
    );

    const prev = screen.getByRole(...QUERY);

    await user.click(prev);

    expect(dispatch).toBeCalled();
    expect(type).toBe(TYPE_EXPECTED);
  });
});
