const transformTemplate = ({ x, y, rotate, scaleX, scaleY }) =>
  `translate(${x ?? 'var(--tw-translate-x)'}, ${
    y ?? 'var(--tw-translate-y)'
  }) rotate(${rotate ?? 'var(--tw-rotate)'}) scale(${
    scaleX ?? 'var(--tw-scale-x)'
  }, ${scaleY ?? 'var(--tw-scale-y)'})`;

export default transformTemplate;
