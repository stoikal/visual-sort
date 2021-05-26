export default class Visual {
  constructor(parentEl, maxValue) {
    this.$parentEl = parentEl;
    this.maxValue = maxValue;

    this._arrayItem = document.createElement('array-item');
  }

  init() {
    this.$arrayContainer = document.createElement('array-container');

    this.$parentEl.append(this.$arrayContainer);
  }

  _clear() {
    this.$parentEl.removeChild(this.$arrayContainer);

    this.init();
  }

  /**
   * bubble sort visualisation. arr.length = 40, 70
   * using innerHTML = 13.01s, 68.299s
   * using doc fragment = 13.01s, 65.015s
   * straight to dom = 13.4s, 70.085s
   */
  async render(array, highlighted, highlighted2) {
    this._clear();
    this.$arrayContainer.length = array.length;

    const $docFrag = document.createDocumentFragment();

    array.forEach((value) => {
      const $newArrayItem = this._arrayItem.cloneNode();
      $newArrayItem.maxValue = this.maxValue;
      $newArrayItem.value = value;

      if (value === highlighted) {
        $newArrayItem.color = 'blue';
      } else if (value === highlighted2) {
        $newArrayItem.color = 'green';
      }

      $docFrag.append($newArrayItem);
    });

    this.$arrayContainer.append($docFrag);
    this.$parentEl.append(this.$arrayContainer);
  }
}
