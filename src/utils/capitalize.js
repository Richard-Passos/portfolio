const capitalize = (value) =>
  isString(value)
    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    : value.map(capitalize);

const isString = (value) => typeof value === 'string';

export default capitalize;
