import { forwardRef } from 'react';

import { cn } from '@/utils';
import CleanLayoutBlock, { CleanLayoutBlockOrganismProps } from '../Layout/Clean/Root';
import { ScrollAnimate, Text, Title } from '@/components/atoms';
import { TextScrollAnimate } from '@/components/molecules';
import { useTranslations } from 'next-intl';
import { ScrollAnimateConfigOptions } from '@/components/atoms/ScrollAnimate';

const ANIMATION_CONFIG = {
  x: {
    scrollConfig: {
      offset: ['-.5 .5', '0 .5'],
    },
    prop: '--x',
    propPoints: ['-101%', '0%'],
  } as ScrollAnimateConfigOptions,
  clipPath: {
    scrollConfig: {
      offset: ['.5 .5', '.75 .5'],
    },
    prop: '--clip-path',
    propPoints: ['inset(0% -100% 0 0)', 'inset(100% -100% 0 0)'],
  } as ScrollAnimateConfigOptions,
  y: {
    scrollConfig: {
      offset: ['.5 .5', '1 .5'],
    },
    prop: '--y',
    propPoints: ['0%', '50%'],
  } as ScrollAnimateConfigOptions,
  top: {
    scrollConfig: {
      offset: ['-1 .5', '0 .5'],
    },
    prop: '--top',
    propPoints: ['0%', '-50%'],
  } as ScrollAnimateConfigOptions,
};

type ButBlockOrganismOwnProps = {
  namespace: ExtractPrefix<Namespace, `${string}.but`>
}

type ButBlockOrganismProps = ButBlockOrganismOwnProps &
  Omit<CleanLayoutBlockOrganismProps, keyof ButBlockOrganismOwnProps>

const ButBlockOrganism = ({ namespace, className, ...props }: ButBlockOrganismProps, ref: ButBlockOrganismProps['ref']) => {
  const t = useTranslations(namespace)

  return (
    <CleanLayoutBlock
      className={cn(
        'grid !min-h-[calc(var(--h)*1.5)] grid-rows-3 [--h:100vh] 2xl:[--h:--max-h] justify-stretch items-stretch justify-items-center',
        className,
      )}
      ref={ref}
      {...props}
    >
      <ScrollAnimate config={ANIMATION_CONFIG.x}>
        <ScrollAnimate config={ANIMATION_CONFIG.clipPath}>
          <ScrollAnimate config={ANIMATION_CONFIG.y}>
            <div className='row-span-2 flex items-center justify-center translate-y-[--y] py-md [clip-path:inset(0_-100%_0_0)]'>
              <Text className='relative translate-x-[--x] text-[clamp(8rem,44vw,32rem)]/none font-bold tracking-tighter'>
                <em className='text-gray-3'>
                  {t('title')}
                </em>

                <span
                  aria-hidden
                  className='pointer-events-none absolute left-0 select-none [clip-path:--clip-path]'
                >
                  {t('title')}
                </span>
              </Text>
            </div>
          </ScrollAnimate>
        </ScrollAnimate>
      </ScrollAnimate>

      <ScrollAnimate config={ANIMATION_CONFIG.top}>
        <div className='flex w-9/10 items-center justify-center'>
          <Title className='relative top-[--top] text-center font-medium' component='p' order={2}>
            <TextScrollAnimate className='justify-center' text={t('description')} />
          </Title>
        </div>
      </ScrollAnimate>
    </CleanLayoutBlock>
  );
};



export default forwardRef(ButBlockOrganism);
export type { ButBlockOrganismProps }