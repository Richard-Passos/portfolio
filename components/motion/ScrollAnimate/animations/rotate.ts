import { ScrollAnimateConfigOptions } from '../Root';

const rotateLeft: ScrollAnimateConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '-360deg'],
  transformConfig: { clamp: false }
};

const rotateRight: ScrollAnimateConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '360deg'],
  transformConfig: { clamp: false }
};

export { rotateLeft, rotateRight };
