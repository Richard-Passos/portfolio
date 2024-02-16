import { Lines, TextScrollAnimation } from '@/components';
import { Separator, Text } from '@/components/ui';
import { aboutText } from '@/constants/texts';
import { cn } from '@/utils';

const AboutViewBackgroundSection = ({ className, ...props }) => {
  return (
    <section
      className={cn(
        'relative grid w-[90%] max-w-screen-lg grid-cols-12 gap-[--gap] py-[min(42vh,10.5rem)] [--gap:--gap-sm]',
        className,
      )}
      {...props}
    >
      <Text.Title className='col-span-full text-xs uppercase text-muted-content'>
        • Who I am
      </Text.Title>

      <Separator className='col-span-full' />

      <Text className='mt-[--gap] text-4xl/snug font-medium max-sm:col-span-full sm:col-start-2 sm:col-end-13'>
        <TextScrollAnimation text={aboutText} />
      </Text>

      <section className='space-y-[--gap] max-sm:col-span-full sm:col-start-6 sm:col-end-13'>
        <Text className='text-2xl/snug font-medium'>
          <TextScrollAnimation text='Lorem ipsum dolor sit amet consectetur adipisicin elit. Eum, ab illo molestias distinctio dicta impedit numquam, suscipit nisi placeat doloribus modi qui ex cupiditate deserunt!' />
        </Text>

        <Text className='text-2xl/snug font-medium'>
          <TextScrollAnimation text='Lorem ipsum dolor sit amet consectetur adipisicin elit. Adipisci dolore omnis beatae sequi! Expedita beatae dolorum assumenda amet, rem et?' />
        </Text>
      </section>

      <section className='col-start-5 col-end-13 mt-2 flex flex-col gap-[--_gap] [--_gap:theme(spacing.4)] [--half-gap:calc(var(--_gap)/2)] sm:col-start-2 sm:col-end-6 sm:row-start-4'>
        <Text.Subtitle className='text-xs uppercase text-muted-content'>
          • Background
        </Text.Subtitle>

        <Separator />

        <Text className='mt-[--half-gap] text-sm text-muted-content'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque ipsa
          esse atque eligendi non veniam culpa ipsum minus ipsam, quisquam vero,
          error, optio assumenda aut.
        </Text>

        <Text className='text-sm text-muted-content'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          cumque. Perspiciatis suscipit exercitationem eos facilis iure
          inventore, vitae veritatis optio!
        </Text>
      </section>

      <Lines />
    </section>
  );
};

export default AboutViewBackgroundSection;
