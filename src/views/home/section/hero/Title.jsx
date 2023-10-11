import { Text } from '@/components/ui';

const HomeSectionHeroTitle = () => {
  return (
    <h1 className='mt-12'>
      <Text.Title
        asChild
        className='text-9xl'
      >
        <span> I create</span>
      </Text.Title>

      <Text.Title
        asChild
        className='text-9xl'
      >
        <span className='outline-text ml-40 block'>experiences</span>
      </Text.Title>
    </h1>
  );
};

export default HomeSectionHeroTitle;
