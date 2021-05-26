/* eslint-disable no-await-in-loop */
import { delay } from '../utils/common.js';

export default async function heapSort(sourceArr, stepCb) {
  async function heapify(array, index, length = array.length) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < length && array[left] > array[largest]) {
      largest = left;
      await delay();
      stepCb(array, array[left], array[largest]);
    }

    if (right < length && array[right] > array[largest]) {
      largest = right;
      await delay();
      stepCb(array, array[right], array[largest]);
    }

    if (largest !== index) {
      [array[index], array[largest]] = [array[largest], array[index]];

      await delay();
      stepCb(array, array[largest], array[index]);
      await heapify(array, largest, length);
    }

    return array;
  }

  async function sort(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
      await heapify(array, i);
    }

    for (let i = array.length - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];

      await heapify(array, 0, i);
    }

    return array;
  }

  await sort(sourceArr);
  stepCb(sourceArr);
}
