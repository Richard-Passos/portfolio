const normId = (name = '') => name.toLowerCase().replace(/ _/g, '-');

export default normId;
