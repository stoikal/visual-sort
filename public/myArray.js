/* eslint-disable no-console */
import bubbleSort from './sort/bubble.js';
import mergeSort from './sort/merge.js';
import insertionSort from './sort/insertion.js';
import quickSort from './sort/quick.js';

const withTimer = (wrapperFn) => async (...args) => {
  const startTime = new Date().getTime();
  console.log('starting');
  await wrapperFn(...args);
  console.log('finished', `${(new Date().getTime() - startTime) / 1000}s`);
};
export default class MyArray {
  constructor(length) {
    const arr = [];

    for (let i = 0; i < length; i++) {
      arr.push(i + 1);
    }

    this.ref = arr;
    this.length = length;
  }

  // Fisher-Yates shuffle
  // https://bost.ocks.org/mike/shuffle/
  shuffle() {
    let currentIndex = this.ref.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.ref[currentIndex];
      this.ref[currentIndex] = this.ref[randomIndex];
      this.ref[randomIndex] = temporaryValue;
    }
  }

  async bubbleSort(render) {
    withTimer(bubbleSort)(this.ref, render);
  }

  async mergeSort(render) {
    withTimer(mergeSort)(this.ref, render);
  }

  async insertionSort(render) {
    withTimer(insertionSort)(this.ref, render);
  }

  async quickSort(render) {
    withTimer(quickSort)(this.ref, render);
  }
}
