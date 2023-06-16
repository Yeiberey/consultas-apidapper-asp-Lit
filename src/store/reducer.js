import { INCREMENTO, DECREMENTO } from "./action-types";

const initialState = {
  contador: 2,
};

export default function contador(state = initialState, { type, payload }) {
  switch (type) {
    case INCREMENTO:
      return { ...state, contador: ++state.contador };
    case DECREMENTO:
      return { ...state, contador: --state.contador };
    default:
      return state;
  }
}
