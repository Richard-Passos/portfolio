import { cn } from '@/utils';
import { ElementProps } from '@/utils/SerializedElement';
import serialize, { Node } from '@/utils/serialize';

type PrimaryHeroExtraOrganismOwnProps = {
  children: Node[];
  props?: ElementProps;
};

type PrimaryHeroExtraOrganismProps = PrimaryHeroExtraOrganismOwnProps &
  Omit<ElementProps, keyof PrimaryHeroExtraOrganismOwnProps>;

const PrimaryHeroExtraOrganism = ({
  children,
  props
}: PrimaryHeroExtraOrganismProps) => {
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

export default PrimaryHeroExtraOrganism;
export type { PrimaryHeroExtraOrganismProps };
