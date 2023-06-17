import {RESET, INCREMENTO, DECREMENTO} from "./action-types";

export const reset = () => {
  return {type: RESET};
};
export const incremento = (value) => {
  return {type: INCREMENTO, payload: {value}};
};
export const decremento = () => {
  return {type: DECREMENTO};
};
