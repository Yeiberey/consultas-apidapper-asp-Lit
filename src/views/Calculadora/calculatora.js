import {LitElement, html, css} from "lit-element";

class Calculatora extends LitElement {
  static get properties() {
    return {
      realTimeScreenValue: {type: Array},
      currentInput: {type: String},
      answerScreen: {type: String},
    };
  }

  constructor() {
    super();
    this.currentInput = "";
    this.answerScreen = "0";
  }
  static get styles() {
    return css`
      .container {
        background-color: #131313;
        max-width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 25px 35px;
        border-radius: 15px;
        user-select: none;
      }

      #Display-area {
        width: 100%;
        margin: 3vh 0;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, minmax(40px, auto));
        word-wrap: break-word;
        padding-bottom: 20px;
        border-bottom: 1px rgba(128, 128, 128, 0.116) solid;
      }

      #Display-area .currentInput {
        /* display: flex; */
        text-align: right;
        height: 8vh;
        color: white;
        font-size: xx-large;
        line-height: 2;
        word-wrap: break-word;
      }

      #Display-area .answerScreen {
        text-align: right;
        color: rgba(150, 150, 150, 0.87);
        height: 7px;
        line-height: 3;
        font-size: larger;
      }

      .keypad-btns {
        display: grid;
        grid: repeat(5, 70px) / repeat(4, 70px);
        grid-row-gap: 20px;
        grid-column-gap: 20px;
      }

      .keypad-btns button {
        outline: none;
        border: none;
        border-radius: 20px;
        background-color: #474b6b;
        color: #fff;
        font-size: x-large;
      }

      .keypad-btns .fun_btn {
        color: #000;
        background: #ffc652;
        font-weight: bold;
      }

      .num_btn:hover {
        background-color: #282a3a;
      }

      .fun_btn:hover {
        background-color: #ffab00;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <section id="Display-area">
          <div class="currentInput" id="currentInput">${this.currentInput}</div>
          <div class="answerScreen" id="answerScreen">${this.answerScreen}</div>
        </section>
        <section class="keypad-btns">
          <button
            type="button"
            class="fun_btn"
            id="clear"
            @click="${this.clear}"
            value=""
          >
            C
          </button>
          <button
            type="button"
            class="fun_btn"
            id="erase"
            @click="${this.handlerErase}"
            value=""
          >
            &#11013;
          </button>
          <button
            @click="${() => this.handlerNumber("/")}"
            type="button"
            class="fun_btn"
            value="/"
          >
            /
          </button>
          <button
            @click="${() => this.handlerNumber("%")}"
            type="button"
            class="fun_btn"
            value="%"
          >
            %
          </button>
          <button
            @click="${() => this.handlerNumber("7")}"
            type="button"
            class="num_btn"
            value="7"
          >
            7
          </button>
          <button
            @click="${() => this.handlerNumber("8")}"
            type="button"
            class="num_btn"
            value="8"
          >
            8
          </button>
          <button
            @click="${() => this.handlerNumber("9")}"
            type="button"
            class="num_btn"
            value="9"
          >
            9
          </button>
          <button
            @click="${() => this.handlerNumber("*")}"
            type="button"
            class="fun_btn"
            value="*"
          >
            x
          </button>
          <button
            @click="${() => this.handlerNumber("4")}"
            type="button"
            class="num_btn"
            value="4"
          >
            4
          </button>
          <button
            @click="${() => this.handlerNumber("5")}"
            type="button"
            class="num_btn"
            value="5"
          >
            5
          </button>
          <button
            @click="${() => this.handlerNumber("6")}"
            type="button"
            class="num_btn"
            value="6"
          >
            6
          </button>
          <button
            @click="${() => this.handlerNumber("-")}"
            type="button"
            class="fun_btn"
            value="-"
          >
            -
          </button>
          <button
            @click="${() => this.handlerNumber("1")}"
            type="button"
            class="num_btn"
            value="1"
          >
            1
          </button>
          <button
            @click="${() => this.handlerNumber("2")}"
            type="button"
            class="num_btn"
            value="2"
          >
            2
          </button>
          <button
            @click="${() => this.handlerNumber("3")}"
            type="button"
            class="num_btn"
            value="3"
          >
            3
          </button>
          <button
            @click="${() => this.handlerNumber("+")}"
            type="button"
            class="fun_btn"
            value="+"
          >
            +
          </button>
          <button
            @click="${() => this.handlerNumber("00")}"
            type="button"
            class="num_btn"
            value="00"
          >
            00
          </button>
          <button
            @click="${() => this.handlerNumber("0")}"
            type="button"
            class="num_btn"
            value="0"
          >
            0
          </button>
          <button
            @click="${() => this.handlerNumber(".")}"
            type="button"
            class="num_btn"
            value="."
          >
            .
          </button>
          <button
            type="button"
            class="fun_btn"
            id="evaluate"
            value=""
            @click="${this.handlerShowResult}"
          >
            =
          </button>
        </section>
      </div>
    `;
  }
  handlerNumber(value) {
    // To display value on btn press
    if (!this.realTimeScreenValue) {
      this.realTimeScreenValue = [];
    }
    if (!this.realTimeScreenValue.length && this.isOperador(value))
      this.realTimeScreenValue.push(0);
    if (
      this.isOperador(value) &&
      this.isOperador([
        this.realTimeScreenValue[this.realTimeScreenValue.length - 1],
      ])
    ) {
      this.realTimeScreenValue.pop();
    }
    this.realTimeScreenValue.push(value);
    this.currentInput = this.realTimeScreenValue.join("");
    this.handlerEvaluate();
    this.handlerHideResult();
  }
  clear() {
    this.realTimeScreenValue = [];
    this.currentInput = "";
    this.answerScreen = "0";
    this.handlerHideResult();
  }
  handlerErase() {
    // When erase button is clicked
    if (this.realTimeScreenValue?.length) {
      this.realTimeScreenValue.pop();
      if (this.realTimeScreenValue.length) {
        this.currentInput = this.realTimeScreenValue.join("");
        this.handlerEvaluate();
        this.handlerHideResult();
      } else {
        this.currentInput = "";
        this.answerScreen = "0";
      }
    } else {
      this.currentInput = "";
      this.answerScreen = "0";
    }
  }
  isOperador(value) {
    return /^[+\-*/%]$/.test(value);
  }
  handlerEvaluate() {
    // To evaluate answer in real time
    if (
      !/^[+\-*/%]$/.test(
        this.realTimeScreenValue[this.realTimeScreenValue.length - 1]
      )
    ) {
      this.answerScreen = eval(this.realTimeScreenValue.join(""));
    } else {
      const array = [...this.realTimeScreenValue];
      array.pop();
      this.answerScreen = eval(array.join(""));
    }
  }
  handlerShowResult() {
    // When clicked button is evaluate button
    const currentInput = this.shadowRoot.querySelector("#currentInput");
    const answerScreen = this.shadowRoot.querySelector("#answerScreen");

    currentInput.classList.remove("currentInput");
    answerScreen.classList.remove("answerScreen");
    currentInput.classList.add("answerScreen");
    answerScreen.classList.add("currentInput");
    answerScreen.style.color = "white";
  }
  handlerHideResult() {
    const currentInput = this.shadowRoot.querySelector("#currentInput");
    const answerScreen = this.shadowRoot.querySelector("#answerScreen");

    currentInput.classList.remove("answerScreen");
    answerScreen.classList.remove("currentInput");
    currentInput.classList.add("currentInput");
    answerScreen.classList.add("answerScreen");
    answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
  }
}
customElements.define("component-calculatora", Calculatora);
export default Calculatora;
