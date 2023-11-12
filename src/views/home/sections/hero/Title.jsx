import { Text } from '@/components/ui';

const HomeSectionHeroTitle = () => {
  return (
    <Text.Title
      asChild
      className='mt-12 flex flex-col text-xl'
    >
      <h1>
        <span className='text-9xl uppercase'>experiences</span>

        <span className='ml-auto'>that&apos;s what I create</span>
      </h1>
    </Text.Title>
  );
};

export default HomeSectionHeroTitle;
