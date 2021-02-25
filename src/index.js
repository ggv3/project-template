export const sum = (val1, val2) => val1 + val2;

export const reduce = (val1, val2) => {
  if (val1 < val2) {
    throw new Error('Error with reduce');
  }
  return val1 - val2;
};
