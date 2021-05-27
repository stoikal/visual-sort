/* eslint-disable no-await-in-loop */
import { delay } from '../utils/common';

export default async function selectionSort(arr, stepCb) {
  const { length } = arr;

  for (let i = 0; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      const curr = arr[j];
      const minVal = arr[min];

      if (arr[j] < arr[min]) {
        min = j;
      }

      await delay();
      stepCb(arr, curr, minVal);
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      stepCb(arr, arr[min], arr[i]);
    }
  }
  return arr;
}
