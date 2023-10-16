import isFunctionThanCall from './isFunctionThanCall';

const setRefs = (refFromFowardRef, refFromUseRef) => {
  return (el) => {
    isFunctionThanCall(refFromFowardRef, el);

    refFromUseRef.current = el;
  };
};

export default setRefs;
