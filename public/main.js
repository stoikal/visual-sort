import './components/array-container.js';
import './components/array-item.js';
import bubbleSort from './sort/bubble.js';
import mergeSort from './sort/merge.js';
import { getRandomInt } from './utils/common.js';
import array from './utils/create-array.js';



const $outerContainer = document.querySelector('.container');

$outerContainer.append(array.element);


const $randomizeBtn = document.querySelector('#randomize');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $mergeSortBtn = document.querySelector('#merge-sort');

$randomizeBtn.addEventListener('click', () => {
  array.itemRefs.forEach((item) => {
    item.setAttribute('value', getRandomInt(array.MAX_VALUE));
  });
});

$bubbleSortBtn.addEventListener('click', () => {
  bubbleSort(array.itemRefs);
});

$mergeSortBtn.addEventListener('click', () => {
  mergeSort(array.itemRefs);
});
