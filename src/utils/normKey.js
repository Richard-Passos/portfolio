import capitalize from './capitalize';

const normKey = (str) => str?.split(/[ _-]/).map((w, i) => i === 0 ? w.toLowerCase() : capitalize(w)).join('');

export default normKey;
