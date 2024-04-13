import normCompName from '../normCompName';

describe('normCompName()', () => {
  [
    { param: 'ButTON', expected: 'Button' },
    { param: 'QuEStioN mARK', expected: 'QuestionMark' },
  ].forEach(({ param, expected }) => {
    it(`should return a valid name for a component`, () => {
      const res = normCompName(param);

      expect(res).toEqual(expected);
    });
  });
});
