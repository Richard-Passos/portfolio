import capitalize from './capitalize';

const normalizeCompName = (name = '') =>
  capitalize(name.split(/[ _-]/)).join('');

export default normalizeCompName;
