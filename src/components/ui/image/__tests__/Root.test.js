import { render, screen } from '@testing-library/react';

import Image from '../Root';

const QUERY_OBJ = { alt: 'Testing image', options: {} },
  QUERY = Object.values(QUERY_OBJ);

const defaultProps = {
  height: 350,
  src: '/images/placeholder.png',
  width: 556,
};

describe('<Image />', () => {
  it('should render properly', () => {
    render(
      <Image
        alt={QUERY_OBJ.alt}
        {...defaultProps}
      />,
    );

    const image = screen.getByAltText(...QUERY);

    expect(image).toBeInTheDocument();
  });

  it('should provide a default alt text', () => {
    render(
      <Image
        alt=''
        {...defaultProps}
      />,
    );

    const image = screen.getByAltText(/^\w+/);

    expect(image).toBeInTheDocument();
  });

  it('should provide a default src with alt text', () => {
    render(<Image alt='' />);

    const image = screen.getByAltText(/^\w+/);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt');
  });
});
