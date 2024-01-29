'use client';

import { useEffect, useState } from 'react';

const useGetNumberOfSiblings = (
  containerRef,
  childrenRef,
  containerTimes = 2,
  returnJustOddNumber = false,
) => {
  const [numberOfSiblings, setNumberOfSiblings] = useState(1);

  useEffect(() => {
    const handleSetNumberOfSiblings = () => {
      if (containerRef.current && childrenRef.current) {
        const containerWidth =
            containerRef.current.getBoundingClientRect().width,
          childrenWidht = childrenRef.current.getBoundingClientRect().width;

        const numberOfChildren = Math.ceil(
          (containerWidth * containerTimes) / childrenWidht,
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
  }, [containerRef, childrenRef, containerTimes, returnJustOddNumber]);

  return numberOfSiblings;
};

export default useGetNumberOfSiblings;
