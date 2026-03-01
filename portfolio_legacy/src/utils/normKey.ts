import capitalize from './capitalize';

const normKey = (str: string) => {
  if (!str) return '';

  str = str.trim();

  str = str[0] + str.slice(1).replace(/([A-Z])/g, '-$1');

  str = str
    .split(/[ _-]+/)
    .map((w, i) => (i === 0 ? w.toLowerCase() : capitalize(w)))
    .join('');

  return str;
};

export { normKey };
