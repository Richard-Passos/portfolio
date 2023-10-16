import { Cursor, Magnetic } from '@/components';
import { Button as ButtonUi } from '@/components/ui';

const Button = ({ magneticProps, stickyProps, className, ...props }) => {
  return (
    <Magnetic {...magneticProps}>
      <Cursor.Sticky {...stickyProps}>
        <ButtonUi {...props} />
      </Cursor.Sticky>
    </Magnetic>
  );
};

export default Button;
