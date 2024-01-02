import getBase64 from './getBase64';

const getBlurDataUrls = async (images) => {
  const base64Promises = images.map(({ src }) => getBase64(src));

  const base64Results = await Promise.all(base64Promises);

  images = images.map((image, i) => ({
    ...image,
    blurDataURL: base64Results[i],
  }));

  return images;
};

export default getBlurDataUrls;
