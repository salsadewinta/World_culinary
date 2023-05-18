class FootBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      :host {
        position: fixed;
        padding: 10px 10px 0px 10px;
        bottom: 0;
        width: 100%;
        height: 40px;
        background: #9E6F21;
        color: #FFEEB3;
        text-align: center; 
        font-weight: bold;
           }
      h5 {
          font: arial;
        }
      </style>
      
      <h5> Salsa dewinta &#169; 2023 v.0.1 </h5>
    `;
  }
}

customElements.define("foot-bar", FootBar);
