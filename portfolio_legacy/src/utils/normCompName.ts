import capitalize from './capitalize';

const normCompName = (str: string) => {
  if (!str) return '';

  str = str.trim();

  str = str[0] + str.slice(1).replace(/([A-Z])/g, '-$1');

  str = str
    .split(/[ _-]+/)
    .map(capitalize)
    .join('');

  return str;
};

export { normCompName };
