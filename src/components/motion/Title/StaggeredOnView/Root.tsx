import { StaggeredTitleClientOnView } from './Client';
import { Title, TitleProps } from '@/components/system/Title';

export type StaggeredTitleOnViewProps = TitleProps;

export const StaggeredTitleOnView = (props: StaggeredTitleOnViewProps) => {
  return (
    <StaggeredTitleClientOnView>
      <Title {...props} />
    </StaggeredTitleClientOnView>
  );
};
