import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Next from '../Next';
import { CarouselContext } from '../Root';

const QUERY_OBJ = { role: 'button', options: { name: /^Next/ } },
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

describe('<Next />', () => {
  it('should render properly', () => {
    render(
      <Provider>
        <Next />
      </Provider>,
    );

    const next = screen.getByRole(...QUERY);

    expect(next).toBeInTheDocument();
  });

  it('should change tag', () => {
    render(
      <Provider>
        <Next asChild>
          <a href='#'>next</a>
        </Next>
      </Provider>,
    );

    const prevTag = screen.queryByRole(...QUERY),
      next = screen.getByRole('link', QUERY_OBJ.options);

    expect(prevTag).not.toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  const TYPE_EXPECTED = 'increment';
  it(`should on click event call dispatch with type equal to ${TYPE_EXPECTED}`, async () => {
    let type = '';

    const dispatch = jest.fn((action) => (type = action.type)),
      user = userEvent.setup();

    render(
      <Provider dispatch={dispatch}>
        <Next />
      </Provider>,
    );

    const next = screen.getByRole(...QUERY);

    await user.click(next);

    expect(dispatch).toBeCalled();
    expect(type).toBe(TYPE_EXPECTED);
  });
});
