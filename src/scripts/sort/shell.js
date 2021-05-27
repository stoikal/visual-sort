/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common';

async function shellSort(arr, render) {
  const n = arr.length;

  for (let interval = Math.floor(n / 2); interval > 0; interval = Math.floor(interval / 2)) {
    // Sort the element using insertion sort in each cycle.
    for (let i = interval; i < n; i += 1) {
      const temp = arr[i];
      let j;

      for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
        const highlighted1 = arr[j];
        const highlighted2 = arr[j - interval];

        arr[j] = arr[j - interval];
        await delay();
        render(arr, highlighted1, highlighted2);
      }

      const highlighted1 = temp;
      const highlighted2 = arr[j];

      arr[j] = temp;

      await delay();
      render(arr, highlighted1, highlighted2);
    }
  }
}

export default shellSort;
