class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        background-color: white;
      }
      
      .search-container > input {
        width: 75%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid  #FFEEB3;
        font-weight: bold;
      }
      
      .search-container > input:focus {
        outline: 0;
        border-bottom: 2px solid #FFEEB3;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-container >  input::placeholder {
        color: #9E6F21;
        font-weight: normal;
      }
      
      .search-container > button {
        width: 23%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #FFEEB3;
        color: #9E6F21;
        border: 0;
        text-transform: uppercase;
      }
      
      @media screen and (max-width: 550px){
        .search-container {
          flex-direction: column;
          position: static;
        }
        
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
        
        .search-container > button {
          width: 100%;
        }
      }
    </style>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search your favorite culinary" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit"><b>Search</b></button>
      </div>
    `;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
