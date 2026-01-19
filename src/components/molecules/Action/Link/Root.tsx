'use client';

import Button, { ButtonProps } from '@/components/atoms/Button';
import UnstyledLink, {
  UnstyledLinkProps
} from '@/components/atoms/Link/Unstyled';

type ActionLinkMoleculeOwnProps = ButtonProps;

type ActionLinkMoleculeProps = ActionLinkMoleculeOwnProps &
  Omit<UnstyledLinkProps, keyof Omit<ActionLinkMoleculeOwnProps, 'ref'>>;

const ActionLinkMolecule = (props: ActionLinkMoleculeProps) => {
  return (
    <Button
      component={UnstyledLink}
      {...props}
    />
  );
};

export default ActionLinkMolecule;
export type { ActionLinkMoleculeProps };
