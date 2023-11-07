import { go } from './go';

export const pipe = (...funcs) => {
  return (input) => go(input, ...funcs);
};
