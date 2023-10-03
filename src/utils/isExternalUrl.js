const isExternalUrl = (url) => {
  const a = document.createElement('a');

  a.href = url;

  return a.host !== location.host;
};

export default isExternalUrl;
