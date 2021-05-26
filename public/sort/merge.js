import { delay } from '../utils/common.js';

async function mergeSort(sourceArr, render) {
  const snapshot = [...sourceArr];

  async function merge([leftStart, leftArr], [, rightArr]) {
    const temp = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length || rightIndex < rightArr.length) {
      const left = leftArr[leftIndex];
      const right = rightArr[rightIndex];

      if (left <= right) {
        snapshot[leftStart + temp.length] = left;
        temp.push(left);
        leftIndex++;
      } else if (left > right) {
        snapshot[leftStart + temp.length] = right;
        temp.push(right);
        rightIndex++;
      } else if (left) {
        snapshot[leftStart + temp.length] = left;
        temp.push(left);
        leftIndex++;
      } else {
        snapshot[leftStart + temp.length] = right;
        temp.push(right);
        rightIndex++;
      }
      // eslint-disable-next-line no-await-in-loop
      await delay(0);
      render(snapshot, left, right);
    }
    return temp;
  }

  async function sortFunc(start, arr) {
    const { length } = arr;
    const mid = Math.ceil(length / 2);

    if (length < 2) return arr;

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftStart = start;
    const rightStart = start + mid;

    return merge(
      [leftStart, await sortFunc(leftStart, left)],
      [rightStart, await sortFunc(rightStart, right)],
    );
  }

  const result = await sortFunc(0, sourceArr);
  return result;
}

export default mergeSort;
