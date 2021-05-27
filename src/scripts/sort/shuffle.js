/* eslint-disable no-await-in-loop */
import { delay } from '../utils/common';

async function shuffle(arr, stepCb) {
  let currIndex = arr.length;
  let randomIndex;

  while (currIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;

    [arr[currIndex], arr[randomIndex]] = [arr[randomIndex], arr[currIndex]];

    await delay();
    stepCb(arr, arr[randomIndex], arr[currIndex]);
  }
}

export default shuffle;
