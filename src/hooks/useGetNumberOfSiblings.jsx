'use client';

import { useEffect, useState } from 'react';

const useGetNumberOfSiblings = (
  containerRef,
  childrenRef,
  dimension = 'width',
  containerTimes = 2,
  returnJustOddNumber = true,
) => {
  const [numberOfSiblings, setNumberOfSiblings] = useState(1);

  useEffect(() => {
    const handleSetNumberOfSiblings = () => {
      if (containerRef.current && childrenRef.current) {
        const containerDimen =
            containerRef.current.getBoundingClientRect()[
              dimension.toLowerCase()
            ],
          childrenDimen =
            childrenRef.current.getBoundingClientRect()[
              dimension.toLowerCase()
            ];

        const numberOfChildren = Math.ceil(
          (containerDimen * containerTimes) / childrenDimen,
        );

        setNumberOfSiblings(
          Math.max(
            returnJustOddNumber && numberOfChildren % 2 !== 0
              ? numberOfChildren
              : numberOfChildren - 1,
            1,
          ),
        );
      }
    };

    handleSetNumberOfSiblings();

    window.addEventListener('resize', handleSetNumberOfSiblings);

    return () =>
      window.removeEventListener('resize', handleSetNumberOfSiblings);
  }, [
    containerRef,
    childrenRef,
    dimension,
    containerTimes,
    returnJustOddNumber,
  ]);

  return numberOfSiblings === Infinity ? 0 : numberOfSiblings;
};

export default useGetNumberOfSiblings;
