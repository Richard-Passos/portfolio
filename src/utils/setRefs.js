import isFunctionThanCall from './isFunctionThanCall';

const setRefs = (refFromFowardRef, refFromUseRef) => {
  return (node) => {
    isFunctionThanCall(refFromFowardRef, node);

    refFromUseRef.current = node;
  };
};

export default setRefs;
