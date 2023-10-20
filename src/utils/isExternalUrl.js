'use client';

const _checkDomain = (url) => {
  if (url.indexOf('//') === 0) url = location.protocol + url;

  return url.toLowerCase().replace('//', '').replace(/\/.*/, '');
};

const isExternalUrl = (url) =>
  (url.indexOf(':') > -1 || url.indexOf('//') > -1) &&
  _checkDomain(window.location.href) !== _checkDomain(url);

export default isExternalUrl;
