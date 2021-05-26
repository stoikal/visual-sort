/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
import { delay } from '../utils/common.js';

async function quickSort(sourceArr, render) {
  async function partition(arr, left, right, pivot) {
    while (left <= right) {
      while (arr[left] < pivot) {
        const curr = arr[left];
        left++;

        await delay();
        render(sourceArr, curr, pivot);
      }

      while (arr[right] > pivot) {
        const curr = arr[right];
        right--;

        await delay();
        render(sourceArr, curr, pivot);
      }

      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
        await delay();
        render(sourceArr, arr[right], arr[left]);
      }
    }
    await delay();
    return left;
  }

  async function sortFunc(arr, left, right) {
    if (left >= right) {
      return;
    }
    const mid = Math.floor((left + right) / 2);
    const pivot = arr[mid];
    const index = await partition(arr, left, right, pivot);

    await sortFunc(arr, left, index - 1);
    await sortFunc(arr, index, right);
  }

  await sortFunc(sourceArr, 0, sourceArr.length - 1);
  return sourceArr;
}

export default quickSort;
