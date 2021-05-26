/* eslint-disable no-console */
import bubbleSort from './sort/bubble.js';
import mergeSort from './sort/merge.js';
import insertionSort from './sort/insertion.js';

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
    const startTime = new Date().getTime();
    console.log('bubble sort starts');
    await bubbleSort(this.ref, render);
    console.log('bubble sort ends', (new Date().getTime() - startTime) / 1000);
  }

  async mergeSort(render) {
    const startTime = new Date().getTime();
    console.log('merge sort starts');
    await mergeSort(this.ref, render);
    console.log('merge sort ends', (new Date().getTime() - startTime) / 1000);
  }

  async insertionSort(render) {
    const startTime = new Date().getTime();
    console.log('insertion sort starts');
    await insertionSort(this.ref, render);
    console.log('merge sort ends', (new Date().getTime() - startTime) / 1000);
  }
}
