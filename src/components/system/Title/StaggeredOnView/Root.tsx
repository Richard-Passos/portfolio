import { StaggeredTitleAnimOnView } from './Anim';
import { Title, TitleProps } from '@/components/system/Title';

export type StaggeredTitleOnViewProps = TitleProps;

export const StaggeredTitleOnView = (props: StaggeredTitleOnViewProps) => {
  return (
    <StaggeredTitleAnimOnView>
      <Title {...props} />
    </StaggeredTitleAnimOnView>
  );
};
