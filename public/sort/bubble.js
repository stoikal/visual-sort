/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common.js';

async function bubbleSort(arr, render) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      const highlighted = arr[j];
      const highlighted2 = arr[j + 1];
      if (arr[j] > arr[j + 1]) {
        // highlighted = arr[j];

        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      await delay(0);
      render(arr, highlighted, highlighted2);
    }
  }
}

export default bubbleSort;
