import { cn } from '@/utils';
import { ElementProps } from '@/utils/SerializedElement';
import serialize, { Node } from '@/utils/serialize';

type PrimaryHeroTemplateExtraOrganismOwnProps = {
  children: Node[];
  props?: ElementProps;
};

type PrimaryHeroTemplateExtraOrganismProps =
  PrimaryHeroTemplateExtraOrganismOwnProps &
    Omit<ElementProps, keyof PrimaryHeroTemplateExtraOrganismOwnProps>;

const PrimaryHeroTemplateExtraOrganism = ({
  children,
  props
}: PrimaryHeroTemplateExtraOrganismProps) => {
  return serialize(children, {
    ...props,
    paragraph: {
      ...props?.paragraph,
      className: cn('text-sm font-semibold', props?.paragraph?.className)
    },
    icon: {
      wrapperProps: { className: 'size-6' }
    }
  });
};

export default PrimaryHeroTemplateExtraOrganism;
export type { PrimaryHeroTemplateExtraOrganismProps };
