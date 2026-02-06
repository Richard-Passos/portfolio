import { PropsWithChildren } from 'react';

import { StateApplier } from '@/components/organisms';

type TemplateOwnProps = PropsWithChildren<{}>;

type TemplateProps = TemplateOwnProps;

const Template = ({ children }: TemplateProps) => {
  return <StateApplier>{children}</StateApplier>;
};

export default Template;
export type { TemplateProps };
