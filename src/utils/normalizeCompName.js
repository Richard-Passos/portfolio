import capitalize from './capitalize';

const normalizeCompName = (name) => capitalize(name.split(' ')).join('');

export default normalizeCompName;
