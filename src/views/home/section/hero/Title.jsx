import { Text } from '@/components/ui';

const HomeSectionHeroTitle = () => {
  return (
    <Text.Title
      asChild
      className='mt-12 w-full max-w-4xl flex-col items-start text-9xl'
    >
      <h1>
        I create
        <span className='outline-text ml-auto'>experiences</span>
      </h1>
    </Text.Title>
  );
};

export default HomeSectionHeroTitle;
