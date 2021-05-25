const template = document.createElement('template');
const NODE_SIZE = 6;

template.innerHTML = `
  <style>
    .vertical-bar {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(10, 1fr);
      grid-column-start: 1;
      height: 50px;
    }

    .node {
      min-height: ${NODE_SIZE}px; 
      min-width: ${NODE_SIZE * 1.5}px;
      grid-row-start: 1;
      background: red;
    }

  </style>
  <div class='vertical-bar'>
    <div class='node'>
      <slot></slot>
    </div>
  </div>
`;

class ArrayItem extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'max-value', 'color'];
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

  get color() {
    return this.getAttribute('color');
  }

  set color(newValue) {
    this.setAttribute('color', newValue);
  }

  connectedCallback() {
    this.$verticalBar.maxValue = this._defaultMaxValue;
  }

  attributeChangedCallback(name, prevVal, newVal) {
    if (name === 'max-value') {
      const maxVal = Number(newVal);
      this.$verticalBar.style['grid-template-rows'] = `repeat(${newVal}, 1fr)`;
      this.$verticalBar.style.height = `${maxVal * NODE_SIZE}px`;
      this.$node.style['grid-row-end'] = maxVal + 1;
    } else if (name === 'color') {
      this.$node.style['background-color'] = newVal;
    } else if (name === 'value') {
      const rowStart = Number(this.maxValue) + 1 - Number(newVal);
      this.$node.style['grid-row-start'] = rowStart;
    }
  }
}

customElements.define('array-item', ArrayItem);
