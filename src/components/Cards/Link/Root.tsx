import { Icon, Text, Title } from '@/components/atoms';
import UnstyledLink from '@/components/atoms/Link/Unstyled';
import { CardRoot, CardRootProps } from '@/components/molecules/Card';
import { urlRegex } from '@/constants/regexs';
import { cn } from '@/utils';
import serialize, { Node } from '@/utils/serialize';

type LinkCardOrganismOwnProps = {
  data: {
    href: string;
    icon: string;
    title: Node[];
  };
};

type LinkCardOrganismProps = LinkCardOrganismOwnProps &
  Omit<CardRootProps, keyof LinkCardOrganismOwnProps>;

const LinkCardOrganism = ({
  className,
  data,
  ...props
}: LinkCardOrganismProps) => {
  return (
    <CardRoot
      className={cn(
        'min-h-52 overflow-visible border-transparent p-0',
        className
      )}
      {...props}
    >
      <UnstyledLink
        className='rounded-inherit hover:bg-gray-1 dark:hover:bg-dark-5 -m-[(var(--card-padding)+1px)] flex min-h-52 flex-col items-center justify-center border p-(--card-padding) font-normal text-current no-underline'
        href={data.href}
      >
        <div className='flex size-10 items-center justify-center rounded-sm border'>
          <Icon
            className='size-2/3'
            src={data.icon}
          />
        </div>

        <Title
          className='mt-3 text-center text-sm'
          order={4}
        >
          {serialize(data.title)}
        </Title>

        <Text className='text-dimmed text-center text-xs'>
          {data.href.replace(urlRegex, '$3$4')}
        </Text>
      </UnstyledLink>
    </CardRoot>
  );
};

export default LinkCardOrganism;
export type { LinkCardOrganismProps };
