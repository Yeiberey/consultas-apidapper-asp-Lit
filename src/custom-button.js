import { LitElement, html, css } from "lit";

class CustomButton extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`<input type="button" value="hola" />`;
  }
}

customElements.define("custom-button", CustomButton);
export default CustomButton;
