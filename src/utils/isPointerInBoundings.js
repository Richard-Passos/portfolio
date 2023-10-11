const isPointerInBoundings = ({ clientX, clientY }, element) => {
  const isInBoudings = {
    x: false,
    y: false,
  };

  if (element.current) {
    const { top, right, bottom, left } =
      element.current.getBoundingClientRect();

    isInBoudings.x = clientX >= left && clientX <= right;
    isInBoudings.y = clientY >= top && clientY <= bottom;
  }

  return isInBoudings.x && isInBoudings.y;
};

export default isPointerInBoundings;
