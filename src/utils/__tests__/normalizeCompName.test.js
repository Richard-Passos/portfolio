import normalizeCompName from '../normalizeCompName';

describe('normalizeCompName()', () => {
  [
    { param: 'ButTON', expected: 'Button' },
    { param: 'QuEStioN mARK', expected: 'QuestionMark' },
  ].forEach(({ param, expected }) => {
    it(`should return a valid name for a component`, () => {
      const res = normalizeCompName(param);

      expect(res).toEqual(expected);
    });
  });
});
