const normTemplates = (templates = {}) =>
  Object.entries(templates)?.reduce(
    (obj, [key, val]) => ({
      ...obj,
      [`--${key.toLowerCase()}-template`]: val,
    }),
    {},
  );

export default normTemplates;
