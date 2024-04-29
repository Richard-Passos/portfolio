import { Animate } from '@/components';
import { HeaderGetState } from '@/components/header';

const ANIMATION_VARIANTS = [
  { y: '7.5rem', opacity: 0 },
  { y: '0rem', opacity: 1 },
  { y: '-7.5rem', opacity: 0 },
];

const Template = ({ children, ...props }) => {
  return (
    <Animate
      variants={ANIMATION_VARIANTS}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <HeaderGetState>
      <main className='relative flex w-full max-w-bounds flex-col items-center'>
        {children}
      </main>
      </HeaderGetState>
    </Animate>
  );
};

export default Template;
