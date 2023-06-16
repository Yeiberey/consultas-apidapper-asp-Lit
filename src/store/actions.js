import { INCREMENTO, DECREMENTO } from "./action-types";

export const incremento = () => {
  return { type: INCREMENTO };
};
export const decremento = () => {
  return { type: DECREMENTO };
};
