/* eslint-disable no-console */
import shuffle from './sort/shuffle';
import bubbleSort from './sort/bubble';
import insertionSort from './sort/insertion';
import selectionSort from './sort/selection';
import heapSort from './sort/heap';
import shellSort from './sort/shell';
import mergeSort from './sort/merge';
import quickSort from './sort/quick';

const withTimer = (wrapperFn) => async (...args) => {
  const startTime = new Date().getTime();
  console.log('starting');
  await wrapperFn(...args);
  console.log('finished', `${(new Date().getTime() - startTime) / 1000}s`);
};
export default class MyArray {
  constructor(length) {
    this.ref = Array.from({ length }, (elmt, i) => i + 1);
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

  async shuffleVis(render) {
    withTimer(shuffle)(this.ref, render);
  }

  async bubbleSort(render) {
    withTimer(bubbleSort)(this.ref, render);
  }

  async insertionSort(render) {
    withTimer(insertionSort)(this.ref, render);
  }

  async selectionSort(render) {
    withTimer(selectionSort)(this.ref, render);
  }

  async heapSort(render) {
    withTimer(heapSort)(this.ref, render);
  }

  async shellSort(render) {
    withTimer(shellSort)(this.ref, render);
  }

  async mergeSort(render) {
    withTimer(mergeSort)(this.ref, render);
  }

  async quickSort(render) {
    withTimer(quickSort)(this.ref, render);
  }
}
