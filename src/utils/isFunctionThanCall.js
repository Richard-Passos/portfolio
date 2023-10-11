const isFunctionThanCall = (fn, ...params) =>
  typeof fn === 'function' && fn(...params);

export default isFunctionThanCall;
