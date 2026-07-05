import { NextPageIntlayer } from 'next-intlayer';

import { PrimaryHero } from '@/components/layout/Heros';
import { ScrollAnimate } from '@/components/motion';
import { rotateRight } from '@/components/motion/ScrollAnimate/animations';
import { useI18nServer } from '@/hooks';

import { App } from '../../../components copy/layout/regions';
import { SmileIcon } from '../../../components copy/system/icons';

const HomePage = () => {
  const { hero } = useI18nServer('home');

  return (
    <>
      <PrimaryHero
        theme='light'
        data={{
          ...hero,
          left: (
            <ScrollAnimate config={rotateRight}>
              <SmileIcon className='size-8' />
            </ScrollAnimate>
          ),
          right: `(${new Date().getFullYear()})`
        }}
      />
    </>
  );
};

const HomeProvider: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <App locale={locale}>
      <HomePage />
    </App>
  );
};

export default HomeProvider;
