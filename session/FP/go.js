export const go = (input, ...funcs) => {
  const functionArray = [...funcs];
  return functionArray.reduce((acc, cur) => cur(acc), input);
};
