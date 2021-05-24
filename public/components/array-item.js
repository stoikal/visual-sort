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
      height: 6px; 
      width: 6px;
      grid-row-start: 100;
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
    return ['value', 'position']
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));
    
    this.$verticalBar = this._shadowRoot.querySelector('.vertical-bar');
    this.$node = this._shadowRoot.querySelector('.node');

    // this.maxValue = 10;
  }

  // get maxValue() {
  //   return this.getAttribute('max-val');
  // }
  
  // set maxValue(newValue) {
  //   this.setAttribute('max-val', newValue);
  // }

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

  attributeChangedCallback(name, prevVal, newVal) {
    if (name === 'max-val') {
      // this.$verticalBar.style['grid-template-rows'] = `repeat(${newVal}, 1fr)`;
    } else if (name === "position") {
      this.$verticalBar.style['grid-column-start'] = newVal;
    } else if (name === "value") {
      this.$node.style['grid-row-start'] = this.maxValue + 1 - Number(newVal);
    }
  }
}

customElements.define('array-item', ArrayItem)