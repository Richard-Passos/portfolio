import {
  BentoGrid,
  ListHorizontalScroll,
  ScrollTitle,
  Section,
} from '@/components';
import { Icon } from '@/components/ui';
import { capitalize, cn } from '@/utils';

const HomeViewAboutSection = ({ className, data = {}, ...props }) => {
  return (
    <Section
      className={cn(
        'flex flex-col items-center',
        className,
      )}
      {...props}
    >
      <h2 className='w-full'>
        {data.title?.map((w, i) => (
          <ScrollTitle
            dir={i % 2 === 0 ? 'ltr' : 'rtl'}
            key={i}
            title={w}
          />
        ))}
      </h2>

      <HomeViewAboutSectionGrid data={data.grid} className='mt-lg' />

      <HomeViewAboutSectionList data={data.list} className='mt-lg' />
    </Section>
  );
};

const HomeViewAboutSectionGrid = ({ className, data = {}, style, ...props }) => {
  return (
    <BentoGrid
      className={cn(
        'w-9/10 max-w-screen-lg',
        className,
      )}
      style={{ ...Object.entries(data.templates)?.reduce((obj, [key, val]) => ({...obj, [`--${key.toLowerCase()}-template`]: val}), {}), ...style}}      {...props}
    >
      {data.items?.map(({type = '', data}, i) => {
        const Item = BentoGrid.Item[type.split(/[_-]/g).map(capitalize).join('')] || BentoGrid.Item

        return( <BentoGrid.ScrollAnimate key={i}>

        <Item  idx={i} data={data}/>
      </BentoGrid.ScrollAnimate>)

      }
        )}
    </BentoGrid>
  );
};

const HomeViewAboutSectionList = ({ className, data = {}, ...props }) => {
  const { action = {} } = data

  return (
    <div
      className={cn('flex w-full flex-col items-center', className)}
      {...props}
    >
      <ListHorizontalScroll>
        {data.items?.map((data, i) => (
          <ListHorizontalScroll.Item
            baseVelocity={(1 + 0.35 * i) * (i % 2 !== 0 ? 1 : -1)}
            className='[--gap:theme(spacing.4)]'
            key={data}
          >
            <span>{data}</span> ·{' '}
            <span className='opacity-30 dark:opacity-10'>{data}</span>{' '}
            <span className='opacity-30 dark:opacity-10'>·</span>{' '}
            <span className='opacity-30 dark:opacity-10'>{data}</span> ·
          </ListHorizontalScroll.Item>
        ))}
      </ListHorizontalScroll>

      <Button
      {...action.data}
    >
      {action.data?.label}

      <Button.Icon animation={action.animation}>
        <Icon {...action.icon} />
      </Button.Icon>
    </Button>
    </div>
  );
};

export default HomeViewAboutSection;
