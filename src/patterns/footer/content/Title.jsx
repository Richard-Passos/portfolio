import { Cursor, ScrollAnimation } from '@/components';
import { smoothScrollConfig } from '@/components/smooth-scroll';
import { Link, Text } from '@/components/ui';
import { cn } from '@/utils';

const FooterContentTitle = ({ className, ...props }) => {
  const animationConfig = {
    useScrollConfig: {
      offset: ['0 .75', '0 .5'],
    },
    prop: 'x',
    propPoints: ['150%', '0%'],
  };

  return (
    <Cursor.Hover
      content={{ type: 'icon', name: 'Arrow', className: '-rotate-45' }}
      variant={{ scaleX: 1, scaleY: 1 }}
    >
      <Link
        className={cn('my-auto', className)}
        href='/contact'
        {...props}
      >
        <Text.Title className='flex space-x-[--font-blank-space] text-9xl'>
          <span>Let&apos;s work</span>

          <ScrollAnimation.Translate
            className='outline-text relative'
            config={animationConfig}
            smoothConfig={smoothScrollConfig}
          >
            <span>together</span>
          </ScrollAnimation.Translate>
        </Text.Title>
      </Link>
    </Cursor.Hover>
  );
};

export default FooterContentTitle;
