import './components/array-container.js';
import './components/array-item.js';
import bubbleSort from './sort/bubble.js';
import mergeSort from './sort/merge.js';
import { getRandomInt } from './utils/common.js';
import MyArray from './myArray.js';
import Visual from './visual.js';

const MAX_VALUE = 20;
const ARRAY_LENGTH = 50;

const $outerContainer = document.querySelector('.container');

const $randomizeBtn = document.querySelector('#randomize');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $mergeSortBtn = document.querySelector('#merge-sort');

const visual = new Visual($outerContainer, MAX_VALUE);
const myArray = new MyArray(ARRAY_LENGTH, MAX_VALUE);
myArray.randomize();
visual.init();
visual.render(myArray.ref);

$randomizeBtn.addEventListener('click', () => {
  myArray.randomize();
  visual.render(myArray.ref);
});

$bubbleSortBtn.addEventListener('click', () => {
  myArray.bubbleSort(visual.render.bind(visual));
});

// $mergeSortBtn.addEventListener('click', () => {
//   mergeSort(array.itemRefs);
// });
