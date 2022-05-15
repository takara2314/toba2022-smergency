const initArr5x5x3 = () => {
  const primary = Array(5);

  for (let i = 0; i < 5; i++) {
    const secondary = Array(5);
    for (let j = 0; j < 5; j++) {
      secondary[j] = [...Array(3)].map(i => 0);
    }
    primary[i] = secondary[j];
  }

  return primary;
};

export default initArr5x5x3;
