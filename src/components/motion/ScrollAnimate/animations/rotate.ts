import { ScrollAnimateRootConfigOptions } from '../Root';

const rotateLeft: ScrollAnimateRootConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '-360deg'],
  transformConfig: { clamp: false }
};

const rotateRight: ScrollAnimateRootConfigOptions = {
  scroll: 'scrollY',
  scrollPoints: [0, 400],
  prop: 'rotate',
  propPoints: ['0deg', '360deg'],
  transformConfig: { clamp: false }
};

export { rotateLeft, rotateRight };
