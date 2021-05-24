const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(100, 1fr);
      height: 100%;
      background: #bdbdbd
    }
  </style>
  <div class="container">
    <slot></slot>
  </div>
`

class ArrayContainer extends HTMLElement {
  static get observedAttributes() {
    return ['length']
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));

    this.$container = this._shadowRoot.querySelector('.container');
  }

  get length() {
    return this.getAttribute('length');
  }
  
  set length(newValue) {
    this.setAttribute('length', newValue);
  }

  attributeChangedCallback(name, prevVal, newVal) {
    this.$container.style['grid-template-columns'] = `repeat(${newVal}, 1fr)`
  }
}

customElements.define('array-container', ArrayContainer)