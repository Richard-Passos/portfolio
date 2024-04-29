import capitalize from './capitalize';

const normCompName = (str = '') => str.split(/[ _-]/).map(capitalize).join('');

export default normCompName;
