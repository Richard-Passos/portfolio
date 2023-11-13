const scrollTo = (id) => {
  const el = document.getElementById(id);

  if (el) window.scrollTo(0, el.offsetTop);
};

export default scrollTo;
