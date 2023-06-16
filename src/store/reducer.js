import { RESET, INCREMENTO, DECREMENTO } from "./action-types";

const initialState = {
  contador: 2,
};

export default function contador(state = initialState, { type, payload }) {
  switch (type) {
    case RESET:
      return { ...state, contador: 0 };
    case INCREMENTO:
      return { ...state, contador: ++state.contador };
    case DECREMENTO:
      return { ...state, contador: --state.contador };
    default:
      return state;
  }
}
