import isExternalUrl from '../isExternalUrl';

describe('isExternalUrl()', () => {
  [
    {
      param: 'https://placeholder.com',
      expected: true,
    },
    {
      param: 'mailto:placeholder@example.com',
      expected: true,
    },
    {
      param: '/placeholder',
      expected: false,
    },
    {
      param: '#placeholder',
      expected: false,
    },
  ].forEach(({ param, expected }) => {
    it(`should return true if the url external`, () => {
      const res = isExternalUrl(param);

      expect(res).toBe(expected);
    });
  });
});
