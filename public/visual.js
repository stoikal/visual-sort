export default class Visual {
  constructor(parentEl, arrayLength) {
    this.$parentEl = parentEl;
    this.arrayLength = arrayLength;

    this._barWidth = 3;
    this._barHeight = 2;

    this._svgns = 'http://www.w3.org/2000/svg';

    this._colorBg = '#83C5BE';
    this._colorBar = '#CD5334';
    // this._colorHl1 = '#0C6291';
    this._colorHl1 = '#F9CB40';
    this._colorHl2 = '#F9CB40';
  }

  init() {
    this.$svg = document.createElementNS(this._svgns, 'svg');
    const svgWidth = this.arrayLength * this._barWidth;
    const svgHeight = this.arrayLength * this._barHeight;

    const $background = document.createElementNS(this._svgns, 'rect');
    $background.setAttributeNS(null, 'width', `${svgWidth}px`);
    $background.setAttributeNS(null, 'height', `${svgHeight}px`);
    $background.setAttributeNS(null, 'fill', this._colorBg);

    this.$svg.setAttributeNS(null, 'width', `${svgWidth}px`);
    this.$svg.setAttributeNS(null, 'height', `${svgHeight}px`);
    this.$svg.appendChild($background);

    for (let i = 0; i < this.arrayLength; i++) {
      const value = i + 1;
      const x = i * this._barWidth;
      const y = svgHeight - value * this._barHeight;

      const $bar = document.createElementNS(this._svgns, 'rect');
      $bar.setAttributeNS(null, 'width', `${this._barWidth}px`);
      $bar.setAttributeNS(null, 'height', `${value * this._barHeight}px`);
      $bar.setAttributeNS(null, 'fill', this._colorBar);
      $bar.setAttributeNS(null, 'x', x);
      $bar.setAttributeNS(null, 'y', y);

      this.$svg.appendChild($bar);
    }

    this.$parentEl.append(this.$svg);
  }

  /**
   * bubble sort visualisation. arr.length = 40, 70
   * using innerHTML = 13.01s, 68.299s
   * using doc fragment = 13.01s, 65.015s
   * straight to dom = 13.4s, 70.085s
   * svg replace child = 4.46s, 17.79s
   * svg set attr = 4.30s, 15.08s
   */
  async render(array, highlighted, highlighted2) {
    const arrLength = array.length;
    const svgWidth = arrLength * this._barWidth;
    const svgHeight = arrLength * this._barHeight;

    this.$svg.setAttribute('width', `${svgWidth}px`);
    this.$svg.setAttribute('height', `${svgHeight}px`);

    const svgChildren = this.$svg.querySelectorAll('rect');

    array.forEach((value, i) => {
      const x = i * this._barWidth;
      const y = svgHeight - value * this._barHeight;

      const $bar = svgChildren[i + 1];

      $bar.setAttributeNS(null, 'width', `${this._barWidth}px`);
      $bar.setAttributeNS(null, 'height', `${value * this._barHeight}px`);
      $bar.setAttributeNS(null, 'fill', this._colorBar);
      $bar.setAttributeNS(null, 'x', x);
      $bar.setAttributeNS(null, 'y', y);

      if (value === highlighted) {
        $bar.setAttributeNS(null, 'fill', this._colorHl1);
      } else if (value === highlighted2) {
        $bar.setAttributeNS(null, 'fill', this._colorHl2);
      }
    });
  }
}
