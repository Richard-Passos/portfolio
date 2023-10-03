import cn from '../cn';

describe('cn()', () => {
  it('should return a string', () => {
    const res = cn(
      'a',
      'b',
      'c',
      { d: true },
      { e: false },
      ['f'],
      ['g'],
      [{ i: true }],
      [['h']],
    );

    expect(typeof res).toEqual('string');
  });

  it('should return a string with unique tailwind class', () => {
    const EXPECTED = 'bg-red-500 text-red-500';

    const res = cn(
      'bg-gray-500 text-gray-500',
      'bg-blue-500 text-blue-500',
      'bg-orange-500',
      'text-orange-500',
      { 'bg-green-500 bg-green-500': true },
      { 'bg-yellow-500 bg-yellow-500': false },
      ['bg-pink-500 text-pink-500'],
      [{ 'bg-purple-500 text-purple-500': true }],
      ['bg-blue-500 bg-red-500 text-red-500'],
    );

    expect(res).toBe(EXPECTED);
  });
});
