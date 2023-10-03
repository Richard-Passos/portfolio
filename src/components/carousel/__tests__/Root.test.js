import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';

import Carousel, { CarouselContext } from '../Root';

const QUERY_OBJ = { role: 'region', options: { name: 'Carousel' } },
  QUERY = Object.values(QUERY_OBJ);

const TestingChild = ({ type = '' }) => {
  const { currentIdx, dispatch } = useContext(CarouselContext);

  return (
    <>
      {currentIdx >= 0 && <span data-testid='currentIdx'>{currentIdx}</span>}

      {dispatch && (
        <button
          aria-label={type}
          data-testid='dispatch'
          onClick={() => dispatch({ type })}
        />
      )}
    </>
  );
};

describe('<Carousel />', () => {
  it('should render properly', () => {
    render(<Carousel />);

    const carousel = screen.getByRole(...QUERY);

    expect(carousel).toBeInTheDocument();
  });

  it('should provide current index and dispatch', () => {
    render(
      <Carousel>
        <TestingChild />
      </Carousel>,
    );

    const currentIdx = screen.getByTestId('currentIdx'),
      dispatch = screen.getByTestId('dispatch');

    expect(currentIdx).toBeInTheDocument();
    expect(dispatch).toBeInTheDocument();
  });

  const items = [0, 1, 2];
  [
    { type: 'increment', expectedContent: 1 },
    { type: 'decrement', expectedContent: items.length - 1 },
  ].forEach(({ type, expectedContent }) =>
    it(`should handle current index ${type} with dispatch call`, async () => {
      const user = userEvent.setup();

      render(
        <Carousel itemsLength={items.length}>
          <TestingChild type={type} />
        </Carousel>,
      );

      const currentIdx = screen.getByTestId('currentIdx'),
        dispatchBtn = screen.getByRole('button', { name: type });

      expect(currentIdx).toHaveTextContent(0);

      await user.click(dispatchBtn);

      expect(currentIdx).toHaveTextContent(expectedContent);
    }),
  );
});
