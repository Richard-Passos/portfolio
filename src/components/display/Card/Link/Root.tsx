import { Button } from '@/components/input/Button';
import { Link, LinkProps } from '@/components/navigation/Link';
import { cn } from '@/utils/cn';

export type LinkCardProps = LinkProps;

export const LinkCard = ({ className, ...props }: LinkCardProps) => {
  return (
    <Button asChild>
      <Link
        className={cn(
          'flex min-h-52 flex-col items-center justify-center border bg-body p-5 font-normal text-body-emphasis',
          className
        )}
        {...props}
      />
    </Button>
  );
};
