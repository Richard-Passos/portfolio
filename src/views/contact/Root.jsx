import { cn } from '@/utils';

import Sections from './sections';

const ContactView = ({ className, ...props }) => {
  return (
    <main
      className={cn(
        'dark-layout dark flex w-full max-w-bounds flex-col items-center',
        className,
      )}
      {...props}
    >
      <Sections.Hero />

      <Sections.Contact theme='light' />

      <Sections.Services theme='dark' />
    </main>
  );
};

export default ContactView;
