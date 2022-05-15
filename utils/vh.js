const vh = (percent) => {
  return `calc(var(--vh, 1vh) * ${percent})`;
};

export default vh;
