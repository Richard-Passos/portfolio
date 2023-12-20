const transformTemplate = (transform) => {
  const translate = `translate(${transform.x ?? 'var(--tw-translate-x)'}, ${
      transform.y ?? 'var(--tw-translate-y)'
    })`,
    rotate =
      transform.rotateX || transform.rotateY
        ? `rotateX(${
            transform.rotateX ?? 'var(--tw-rotate-x, 0deg)'
          }) rotateY(${transform.rotateY ?? 'var(--tw-rotate-y, 0deg)'})`
        : `rotate(${transform.rotate ?? 'var(--tw-rotate)'})`,
    scale = `scale(${
      transform.scale ??
      `${transform.scaleX ?? 'var(--tw-scale-x)'}, ${
        transform.scaleY ?? 'var(--tw-scale-y)'
      }`
    })`;

  return `${translate} ${rotate} ${scale}`;
};

export default transformTemplate;
