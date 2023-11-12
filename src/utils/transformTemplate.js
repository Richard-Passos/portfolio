const transformTemplate = ({ x, y, rotate, scale, scaleX, scaleY }) =>
  `translate(${x ?? 'var(--tw-translate-x)'}, ${
    y ?? 'var(--tw-translate-y)'
  }) rotate(${rotate ?? 'var(--tw-rotate)'}) scale(${
    scale ??
    `${scaleX ?? 'var(--tw-scale-x)'}, ${scaleY ?? 'var(--tw-scale-y)'}`
  })`;

export default transformTemplate;
