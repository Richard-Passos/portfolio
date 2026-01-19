import Section, { SectionProps } from '@/components/organisms/Section';
import { cn } from '@/utils';

import FooterContent from './Content';

type FooterOrganismOwnProps = Pick<Partial<SectionProps>, 'theme'>;

type FooterOrganismProps = FooterOrganismOwnProps &
  Omit<SectionProps, keyof FooterOrganismOwnProps>;

const FooterOrganism = ({
  className,
  transitionProps,
  ...props
}: FooterOrganismProps) => {
  return (
    <Section
      bgProps={{
        className: '*:hidden'
      }}
      className={cn('max-w-bounds py-0', className)}
      component='footer'
      theme='light'
      transitionProps={
        {
          reverse: true,
          'data-theme': 'dark',
          ...transitionProps
        } as SectionProps['transitionProps']
      }
      {...props}
    >
      {/* Using like these so Footer doesn't use async, because Slot doesn't work with async children */}
      <FooterContent />
    </Section>
  );
};

export default FooterOrganism;
export type { FooterOrganismProps };
