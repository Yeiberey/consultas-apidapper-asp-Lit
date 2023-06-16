import { RESET, INCREMENTO, DECREMENTO } from "./action-types";

export const reset = () => {
  return { type: RESET };
};
export const incremento = () => {
  return { type: INCREMENTO };
};
export const decremento = () => {
  return { type: DECREMENTO };
};
