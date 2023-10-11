import { Cursor, Magnetic } from '@/components';
import { Button as ButtonUi } from '@/components/ui';

const Button = ({ className, ...props }) => {
  return (
    <Magnetic>
      <Cursor.Sticky>
        <ButtonUi {...props} />
      </Cursor.Sticky>
    </Magnetic>
  );
};

export default Button;
