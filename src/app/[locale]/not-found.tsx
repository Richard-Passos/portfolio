import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import ErrorHero from '@/components/layout/Heros/Error';
import { ArrowUpRightIcon } from '@/components/system/Icon/ArrowUpRight';
import { IntlayerClientProvider } from 'next-intlayer';
import { getLocale, IntlayerServerProvider, useIntlayer } from 'next-intlayer/server';
import { ReactNode } from 'react';

export type NotFoundData = {
  hero: {
    status: ReactNode;
    title: ReactNode;
    text: ReactNode;
    action: ReactNode;
  };
};

export const NotFoundContent = () => {
  const t = useIntlayer('not-found-page');

  return (
    <ErrorHero theme='dark'>
      <ErrorHero.Status>{t.hero.status}</ErrorHero.Status>

      <ErrorHero.Content>
        <ErrorHero.Title>{t.hero.title}</ErrorHero.Title>

        <ErrorHero.Text>{t.hero.text}</ErrorHero.Text>

        <ErrorHero.Action href='/'>
          {t.hero.action} <ArrowUpRightIcon />
        </ErrorHero.Action>
      </ErrorHero.Content>
    </ErrorHero>
  );
};

const NotFoundPage = async () => {
  const locale = await getLocale();

  return (
    <IntlayerClientProvider locale={locale}>
      <IntlayerServerProvider locale={locale}>
        <Header />

        <main className='z-10 flex w-full max-w-bounds grow flex-col items-center justify-center'>
          <NotFoundContent />
        </main>

        <Footer />
      </IntlayerServerProvider>
    </IntlayerClientProvider>
  );
};

export default NotFoundPage;
