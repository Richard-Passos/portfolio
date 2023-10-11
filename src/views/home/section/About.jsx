import { Section } from '@/components';
import { Text } from '@/components/ui';
import { cn } from '@/utils';

const HomeSectionAbout = ({ className, ...props }) => {
  return (
    <Section
      className={cn('flex flex-col items-center justify-around', className)}
      theme='light'
      {...props}
    >
      <Text.Title className='text-7xl font-bold'>About section.</Text.Title>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae
        id ipsam quasi impedit aliquam molestias exercitationem, repellendus
        qui, nulla tenetur quia error laboriosam at cumque rem quo quaerat
        blanditiis. Voluptatibus, aperiam quos? Voluptatum sunt magni nam unde!
        Maxime iusto est repellat maiores tempora, minus possimus iure qui
        mollitia illo!
      </Text>
    </Section>
  );
};

export default HomeSectionAbout;
