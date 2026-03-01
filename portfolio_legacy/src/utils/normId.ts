const normId = (str: string) => {
  if (!str) return '';

  str = str.trim();

  str = str[0] + str.slice(1).replace(/([A-Z])/g, '-$1');

  str = str.replace(/[ _-]+/g, '-').toLowerCase();

  return str;
};

export { normId };
