import { render, screen } from '@testing-library/react';

import Icon from '../Root';

const QUERY_OBJ = { id: 'svg', options: {} },
  QUERY = Object.values(QUERY_OBJ);

describe('<Icon />', () => {
  const ICON = 'Arrow';
  it(`should render "${ICON}" icon`, () => {
    render(
      <Icon
        data-testid={QUERY_OBJ.id}
        name={ICON}
      />,
    );

    const icon = screen.getByTestId(...QUERY);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-name', ICON);
  });

  const DEFAULT_ICON = 'Question mark';
  it(`should render "${DEFAULT_ICON}" icon by default`, () => {
    render(<Icon data-testid={QUERY_OBJ.id} />);

    const icon = screen.getByTestId(...QUERY);

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-name', DEFAULT_ICON);
  });

  [
    {
      iconName: 'arrow',
      expected: 'Arrow',
    },
    {
      iconName: 'QUesTIOn mARK',
      expected: 'Question mark',
    },
  ].forEach(({ iconName, expected }) => {
    it(`should normalize icon name`, () => {
      render(
        <Icon
          data-testid={QUERY_OBJ.id}
          name={iconName}
        />,
      );

      const icon = screen.getByTestId(...QUERY);

      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('data-name', expected);
    });
  });
});
