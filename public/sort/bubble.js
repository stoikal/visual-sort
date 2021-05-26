/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common.js';

async function bubbleSort(arr, render) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      const curr = arr[j];
      const next = arr[j + 1];

      if (curr > next) {
        arr[j] = next;
        arr[j + 1] = curr;
      }

      await delay();
      render(arr, curr, next);
    }
  }
}

export default bubbleSort;
