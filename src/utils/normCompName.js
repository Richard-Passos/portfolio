import capitalize from './capitalize';

const normCompName = (name = '') => name.split(/[ _-]/).map(capitalize).join('');

export default normCompName;
