import { Animate } from '@/components';

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
      <main className='relative flex w-full max-w-bounds flex-col items-center'>
        {children}
      </main>
    </Animate>
  );
};

export default Template;
