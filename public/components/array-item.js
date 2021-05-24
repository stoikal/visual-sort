const template = document.createElement('template');
template.innerHTML = `
  <style>
    .vertical-bar {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(10, 1fr);
      grid-column-start: 1;
    }

    .node {
      height: 5px; 
      width: 5px;
      grid-row-start: 1;
      background: red;
    }

  </style>
  <div class="vertical-bar">
    <div class="node">
      <slot></slot>
    </div>
  </div>
`

class ArrayItem extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'position', 'max-value']
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));
    
    this.$verticalBar = this._shadowRoot.querySelector('.vertical-bar');
    this.$node = this._shadowRoot.querySelector('.node');

    this._defaultMaxValue = 10;
  }

  get maxValue() {
    return this.getAttribute('max-value');
  }
  
  set maxValue(newValue) {
    this.setAttribute('max-value', newValue);
  }

  get value() {
    return this.getAttribute('value');
  }
  
  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  get position() {
    return this.getAttribute('position');
  }
  
  set position(newValue) {
    this.setAttribute('position', newValue);
  }

  connectedCallback() {
    this.$verticalBar.maxValue = this._defaultMaxValue;
  }

  attributeChangedCallback(name, prevVal, newVal) {
    if (name === 'max-value') {
      this.$verticalBar.style['grid-template-rows'] = `repeat(${newVal}, 1fr)`;
    } else if (name === "position") {
      this.$verticalBar.style['grid-column-start'] = newVal;
    } else if (name === "value") {
      const rowStart = Number(this.maxValue) + 1 - Number(newVal);
      this.$node.style['grid-row-start'] = rowStart;
      this.$node.style['grid-row-end'] = `span 1`;
    }
  }
}

customElements.define('array-item', ArrayItem)