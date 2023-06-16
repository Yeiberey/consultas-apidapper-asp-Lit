import { LitElement, html, css } from "lit";
import { connect } from "pwa-helpers";
import store from "../store";
import { incremento, decremento, reset } from "../store/actions"; // Importa las acciones necesarias

class CustomButton extends connect(store)(LitElement) {
  static get properties() {
    return {
      contador: { type: Number },
    };
  }

  constructor() {
    super();
  }
  stateChanged(state) {
    this.contador = state.contador; // Cambia "this.click" a "this.clicks"
  }
  updated(changedProperties) {
    // Llama a `super.updated()` para asegurarte de que las actualizaciones de Lit Element se manejen correctamente
    super.updated(changedProperties);
  }

  render() {
    return html` <p>Contador ${this.contador}</p>
      <div>
        <input type="button" value="-1" @click="${this.decrementar}" />
        <input type="button" value="+1" @click="${this.incrementar}" />
        <input type="button" value="reset" @click="${this.reset}" />
      </div>`;
  }
  reset() {
    store.dispatch(reset());
  }
  incrementar() {
    store.dispatch(incremento());
  }
  decrementar() {
    store.dispatch(decremento());
  }
}

customElements.define("custom-button", CustomButton);
export default CustomButton;
