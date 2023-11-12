const isExternalUrl = (url) =>
  (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
  _checkDomain(location.href) !== _checkDomain(url);

const _checkDomain = (url) => {
  if (url.indexOf('//') === 0) url = location.protocol + url;

  return url.toLowerCase().replace('//', '').replace(/\/.*/, '');
};

export default isExternalUrl;
