const normKey = (name = '') => name.toLowerCase().replace(/ _-/g, '');

export default normKey;
