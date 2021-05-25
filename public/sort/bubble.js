/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common.js';

async function bubbleSort(arr, render) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      await delay(0);
      const highlighted = arr[j];
      if (arr[j] > arr[j + 1]) {
        // highlighted = arr[j];

        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      await render(arr, highlighted);
    }
  }
}

export default bubbleSort;
