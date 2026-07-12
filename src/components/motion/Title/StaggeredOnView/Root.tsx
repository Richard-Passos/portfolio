import { MergeProps } from '@/types/MergeProps';
import { StaggeredTitleClientOnView, StaggeredTitleClientOnViewConfig } from './Client';
import { Title, TitleProps } from '@/components/system/Title';

export type StaggeredTitleOnViewProps = MergeProps<StaggeredTitleClientOnViewConfig, TitleProps>;

export const StaggeredTitleOnView = ({ from, start, end, ...props }: StaggeredTitleOnViewProps) => {
  return (
    <StaggeredTitleClientOnView
      from={from}
      start={start}
      end={end}
    >
      <Title {...props} />
    </StaggeredTitleClientOnView>
  );
};
