import capitalize from '../capitalize';

describe('capitalize()', () => {
  [
    { scenario: '1 string', param: 'test', expected: 'Test' },
    { scenario: '1 string', param: 'tESt', expected: 'Test' },
    {
      scenario: 'multiple strings',
      param: ['hello', 'world'],
      expected: ['Hello', 'World'],
    },
    {
      scenario: 'multiple strings',
      param: ['HeLlO', 'wORld'],
      expected: ['Hello', 'World'],
    },
  ].forEach(({ scenario, param, expected }) => {
    it(`should return ${scenario} with only the first letter in upper case`, () => {
      const res = capitalize(param);

      expect(res).toEqual(expected);
    });
  });
});
