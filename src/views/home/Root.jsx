import Accordion from '@/components/ui/accordion';
import { cn } from '@/utils';

const Root = ({ className, ...props }) => {
  return (
    <main
      className={cn(className)}
      {...props}
    >
      <Accordion>
        <Accordion.Item>
          <Accordion.Header />
        </Accordion.Item>
      </Accordion>
    </main>
  );
};

export default Root;
