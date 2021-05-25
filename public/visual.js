export default class Visual {
  constructor(parentEl, maxValue) {
    this.$parentEl = parentEl;
    this.maxValue = maxValue;
  }

  init() {
    this.$arrayContainer = document.createElement('array-container');

    this.$parentEl.append(this.$arrayContainer);
  }

  _clear() {
    while (this.$arrayContainer.firstChild) {
      this.$arrayContainer.removeChild(this.$arrayContainer.firstChild);
    }
  }

  async render(array, highlighted) {
    this._clear();
    this.$arrayContainer.length = array.length;

    array.forEach((value, i) => {
      const $newArrayItem = document.createElement('array-item');
      $newArrayItem.maxValue = this.maxValue;
      $newArrayItem.value = value;

      if (i === highlighted) {
        $newArrayItem.color = 'blue';
      }

      this.$arrayContainer.append($newArrayItem);
    });
  }
}
