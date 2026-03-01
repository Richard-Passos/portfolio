type Transform = {
  x?: number | string;
  y?: number | string;
  rotate?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  scale?: number | string;
  scaleX?: number | string;
  scaleY?: number | string;
};

const transformTemplate = (transform: Transform) => {
  const translate = `translate(${
    transform.x ?? 'var(--anim-x, 0)'
  }, ${transform.y ?? 'var(--anim-y, 0)'})`;

  const rotate = `rotateX(${
    transform.rotateX ?? 'var(--anim-rotate-x, 0deg)'
  }) rotateY(${transform.rotateY ?? 'var(--anim-rotate-y, 0deg)'}) rotateZ(${transform.rotate ?? 'var(--anim-rotate, 0deg)'})`;

  const scale = `scale(${
    transform.scale ??
    `${transform.scaleX ?? 'var(--anim-scale-x, var(--anim-scale, 1))'}, ${
      transform.scaleY ?? 'var(--anim-scale-y, var(--anim-scale, 1))'
    }`
  })`;

  return `${translate} ${rotate} ${scale}`;
};

export { transformTemplate };
export type { Transform };
