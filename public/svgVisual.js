export default class Visual {
  constructor(parentEl, maxValue) {
    this.$parentEl = parentEl;
    this.maxValue = maxValue;

    this.$svg = document.createElement('svg');
    this._barWidth = 4;
    this._barHeight = 3;

    this._svgns = 'http://www.w3.org/2000/svg';
  }

  init() {
    this.$parentEl.append(this.$svg);
    console.log('nothing todo')
  }

  _clear() {
    this.$parentEl.removeChild(this.$svg);
  }

  /**
   * bubble sort visualisation. arr.length = 40, 70
   * using innerHTML = 13.01s, 68.299s
   * using doc fragment = 13.01s, 65.015s
   * straight to dom = 13.4s, 70.085s
   * svg = 4.46s, 17.79s
   */
  async render(array, highlighted, highlighted2) {
    this._clear();
    const arrLength = array.length;
    const svgWidth = arrLength * this._barWidth;
    const svgHeight = arrLength * this._barHeight;

    this.$svg = document.createElementNS(this._svgns, 'svg');
    this.$svg.setAttribute('width', `${svgWidth}px`);
    this.$svg.setAttribute('height', `${svgHeight}px`);

    const $rect = document.createElementNS(this._svgns, 'rect');
    $rect.setAttributeNS(null, 'width', `${svgWidth}px`);
    $rect.setAttributeNS(null, 'height', `${svgHeight}px`);
    $rect.setAttributeNS(null, 'fill', 'grey');

    this.$svg.appendChild($rect);

    array.forEach((value, i) => {
      const x = i * this._barWidth;
      const y = svgHeight - value * this._barHeight;

      const $bar = document.createElementNS(this._svgns, 'rect');
      $bar.setAttributeNS(null, 'width', `${this._barWidth}px`);
      $bar.setAttributeNS(null, 'height', `${value * this._barHeight}px`);
      $bar.setAttributeNS(null, 'fill', 'red');
      $bar.setAttributeNS(null, 'x', x);
      $bar.setAttributeNS(null, 'y', y);

      if (value === highlighted) {
        $bar.setAttributeNS(null, 'fill', 'blue');
      } else if (value === highlighted2) {
        $bar.setAttributeNS(null, 'fill', 'green');
      }

      this.$svg.appendChild($bar);
    });

    this.$parentEl.append(this.$svg);
  }
}
