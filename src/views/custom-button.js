import {LitElement, html, css} from "lit-element";

export default class CustomButton extends LitElement {
  constructor() {
    super();
  }
  static get properties() {
    return {text: {type: String}, action: {type: Object}};
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
    return html`
      <button @click="${this.action.handler}">${this.text}</button>
    `;
  }
}

customElements.define("custom-button", CustomButton);
