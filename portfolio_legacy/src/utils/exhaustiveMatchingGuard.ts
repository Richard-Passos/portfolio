const exhaustiveMatchingGuard = (_: never): never => {
  throw new Error('Should not reach here!');
};

export { exhaustiveMatchingGuard };
