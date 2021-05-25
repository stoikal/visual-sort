import { delay } from '../utils/common.js';

async function bubbleSort(arr) {
  const start = new Date();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      const curr = arr[j];
      const next = arr[j + 1];

      curr.color = 'blue';
      next.color = 'green';

      await delay(5);

      if (Number(curr.value) > Number(next.value)) {
        const temp = curr.value;
        curr.value = next.value;
        next.value = temp;
      }
      curr.color = 'red';
      next.color = 'red';
    }
  }
  console.log('bubble sort end', new Date().getTime() - start.getTime());
}

export default bubbleSort;
