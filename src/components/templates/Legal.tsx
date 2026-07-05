import { Title } from '@/components/atoms';
import { Section } from '@/components/organisms';
import { LegalPage } from '@/types';
import { serialize } from '@/utils';

type LegalTemplateProps = {
  hero: LegalPage['hero'];
  blocks: LegalPage['blocks'];
  footer: LegalPage['footer'];
};

const LegalTemplate = ({ hero, blocks, footer }: LegalTemplateProps) => {
  return (
    <Section
      forceTheme
      theme='dark'
      className='w-9by10 max-w-5xl'
    >
      {hero && (
        <header className='mr-auto'>
          <Title
            className='wrap-break-word'
            order={1}
          >
            {serialize(hero.title)}
          </Title>

          <section className='mt-3'>
            {serialize(hero.effectiveDate, {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            })}
          </section>
        </header>
      )}

      <section className='mt-8 ml-auto w-full max-w-screen-sm first:*:mt-0'>
        {serialize(blocks, {
          heading: { className: 'mt-8 mb-3 data-[order="2"]:text-2xl!' },
          paragraph: { className: 'mt-2' },
          small: { className: 'mt-8' },
          li: { className: '[p+&]:mt-4' }
        })}
      </section>

      {footer && (
        <footer className='mt-8 ml-auto w-full max-w-screen-sm'>
          {serialize(footer)}
        </footer>
      )}
    </Section>
  );
};
export { LegalTemplate };
export type { LegalTemplateProps };
