import {LitElement, html, css} from "lit-element";
import {connect} from "pwa-helpers";
import store from "../store";
import {incremento, decremento, reset} from "../store/actions";
import "./custom-button";

export class Contador extends connect(store)(LitElement) {
  static get properties() {
    return {
      contador: {type: Number},
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
  static get styles() {
    return css`
      button {
        background-color: #e9e9e9;
        border-radius: 5px;
        padding: 5px 10px;
        border: 0;
      }
      button:hover {
        background-color: #bfbfbf;
      }
    `;
  }

  render() {
    return html` <p>Contador ${this.contador}</p>
      <div>
        <custom-button
          text="1-"
          .action="${{handler: this.decrementar}}"
        ></custom-button>
        <custom-button
          text="Reset"
          .action="${{handler: this.reset}}"
        ></custom-button>
        <custom-button
          text="1+"
          .action="${{handler: this.incrementar}}"
        ></custom-button>
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

customElements.define("component-contador", Contador);
