import { Title } from '@/components/atoms';
import { Section } from '@/components/organisms';
import { LegalPage } from '@/types';
import { serialize } from '@/utils';

type LegalTemplateProps = {
  theme: LegalPage['theme'];
  hero: LegalPage['hero'];
  blocks: LegalPage['blocks'];
  footer: LegalPage['footer'];
};

const LegalTemplate = ({ theme, hero, blocks, footer }: LegalTemplateProps) => {
  return (
    <Section
      forceTheme
      theme={theme}
    >
      <div className='w-9by10 flex max-w-5xl flex-col items-end'>
        {hero && (
          <header className='mt-16 w-full'>
            <Title
              className='w-fit pl-[min(10vw,--spacing(20))] wrap-break-word data-[align=left]:*:-ml-[min(10vw,--spacing(20))]'
              order={1}
            >
              {serialize(hero.title)}
            </Title>

            <section className='mt-2.5'>
              {serialize(hero.effectiveDate, {
                paragraph: {
                  className: 'text-dimmed *:text-text'
                }
              })}
            </section>
          </header>
        )}

        <section className='mt-8 w-full max-w-screen-sm first:*:mt-0'>
          {serialize(blocks, {
            heading: { className: 'mt-8 mb-3 data-[order="2"]:text-2xl!' },
            paragraph: { className: 'mt-2' },
            small: { className: 'mt-8' },
            li: { className: '[p+&]:mt-4' }
          })}
        </section>

        {footer && (
          <footer className='mt-8 w-full max-w-screen-sm'>
            {serialize(footer)}
          </footer>
        )}
      </div>
    </Section>
  );
};
export default LegalTemplate;
export type { LegalTemplateProps };
