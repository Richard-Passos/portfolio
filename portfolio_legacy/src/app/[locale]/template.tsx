import { PropsWithChildren } from 'react';

import { StateProvider } from '@/providers';

type TemplateProps = PropsWithChildren<{}>;

const Template = ({ children }: TemplateProps) => {
  return <StateProvider>{children}</StateProvider>;
};

export default Template;
export type { TemplateProps };
