import { getRandomInt } from './utils/common.js';
import bubbleSort from './sort/bubble.js';

export default class MyArray {
  constructor(length, maxValue) {
    this.length = length;
    this.maxValue = maxValue;

    this.randomize();
    this.ref = [];
  }

  randomize() {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
      arr.push(getRandomInt(this.maxValue));
    }

    this.ref = arr;
  }

  async bubbleSort(render) {
    bubbleSort(this.ref, render);
  }
}
