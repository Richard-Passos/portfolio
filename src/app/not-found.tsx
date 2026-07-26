import data from './not-found.data';

import { ErrorHero, ErrorHeroProps } from '@/components/layout/Heros/Error';

export type NotFoundData = {
  hero: ErrorHeroProps['data'];
};

export const NotFound = () => {
  return (
    <>
      <ErrorHero
        theme='dark'
        data={data.hero}
      />
    </>
  );
};

export default NotFound;
