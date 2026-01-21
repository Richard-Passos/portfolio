import { Title } from '@/components/atoms';
import { Section } from '@/components/organisms';
import { LegalPage } from '@/types';
import { renderComp, serialize } from '@/utils';

type LegalTemplateProps = Pick<LegalPage, 'blocks'>;

const LegalTemplate = ({ blocks }: LegalTemplateProps) => {
  return (
    <Section
      forceTheme
      hasTransition={false}
      theme={blocks.theme}
    >
      <div className='w-9by10 flex max-w-5xl flex-col items-end'>
        <header className='mt-2xl w-full'>
          <Title
            className={`w-fit pl-[min(10vw,--spacing(20))] wrap-break-word data-[align=left]:*:-ml-[min(10vw,--spacing(20))]`}
            order={1}
          >
            {serialize(blocks.header.title)}
          </Title>

          <section className='mt-xs'>
            {serialize(blocks.header.effectiveDate, {
              paragraph: {
                className: 'text-dimmed *:text-text'
              }
            })}
          </section>
        </header>

        <section className={`mt-xl w-full max-w-screen-sm first:*:mt-0`}>
          {serialize(blocks.data, {
            heading: {
              className: 'mt-xl mb-sm data-[order="2"]:!text-2xl'
            },
            paragraph: {
              className: 'mt-2'
            },
            small: {
              className: 'mt-xl'
            },
            li: {
              className: '[p+&]:mt-4'
            }
          })}
        </section>

        {renderComp(
          <footer className='mt-xl w-full max-w-screen-sm'>
            {serialize(blocks.footer)}
          </footer>,
          [!!blocks.footer]
        )}
      </div>
    </Section>
  );
};
export default LegalTemplate;
export type { LegalTemplateProps };
