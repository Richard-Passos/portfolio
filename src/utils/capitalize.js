const capitalize = (value) =>
  typeof value === 'string'
    ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    : value.map(capitalize);

export default capitalize;
