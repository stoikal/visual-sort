export default class Visual {
  constructor(parentEl, array) {
    this.$parentEl = parentEl;
    this.arrayLength = array.length;
    this._array = array;

    this._svgns = 'http://www.w3.org/2000/svg';

    this._colorBg = '#83C5BE';
    this._colorBar = '#CD5334';
    // this._colorHl1 = '#0C6291';
    this._colorHl1 = '#F9CB40';
    this._colorHl2 = '#F9CB40';
  }

  init() {
    this.toggleFullscreen(true);
    this.$svg = document.createElementNS(this._svgns, 'svg');

    const $background = document.createElementNS(this._svgns, 'rect');
    $background.setAttributeNS(null, 'width', this._svgWidth);
    $background.setAttributeNS(null, 'height', this._svgHeight);
    $background.setAttributeNS(null, 'fill', this._colorBg);

    this.$svg.setAttributeNS(null, 'width', this._svgWidth);
    this.$svg.setAttributeNS(null, 'height', this._svgHeight);
    this.$svg.appendChild($background);

    this._array.forEach((value, index) => {
      const $bar = document.createElementNS(this._svgns, 'rect');
      $bar.setAttributeNS(null, 'width', this._getBarWidth());
      $bar.setAttributeNS(null, 'height', this._getBarHeight(value));
      $bar.setAttributeNS(null, 'fill', this._colorBar);
      $bar.setAttributeNS(null, 'x', this._getBarX(index));
      $bar.setAttributeNS(null, 'y', this._getBarY(value));

      this.$svg.appendChild($bar);
    });

    this.$parentEl.append(this.$svg);
  }

  toggleFullscreen(isFullScreen) {
    const len = this._array.length;

    if (isFullScreen) {
      this._getBarWidth = () => `${100 / len}%`;
      this._getBarHeight = (val) => `${val * (100 / len)}%`;
      this._svgWidth = '100%';
      this._svgHeight = '100%';
      this._getBarX = (index) => `${index * (100 / len)}%`;
      this._getBarY = (value) => `${100 - (value * (100 / len))}%`;
    } else {
      const barWidthUnit = 6;
      const barHeightUnit = 4;

      this._getBarWidth = () => `${barWidthUnit}px`;
      this._getBarHeight = (val) => `${val * barHeightUnit}px`;
      this._svgWidth = `${len * barWidthUnit}px`;
      this._svgHeight = `${len * barHeightUnit}px`;
      this._getBarX = (index) => `${index * barWidthUnit}px`;
      this._getBarY = (value) => `${len * barHeightUnit - value * barHeightUnit}px`;
    }
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
    const svgChildren = this.$svg.querySelectorAll('rect');

    array.forEach((value, i) => {
      const $bar = svgChildren[i + 1];
      let color;

      switch (value) {
        case highlighted:
          color = this._colorHl1;
          break;
        case highlighted2:
          color = this._colorHl1;
          break;
        default:
          color = this._colorBar;
          break;
      }

      $bar.setAttributeNS(null, 'fill', color);
      $bar.setAttributeNS(null, 'height', this._getBarHeight(value));
      $bar.setAttributeNS(null, 'y', this._getBarY(value));
    });
  }
}
