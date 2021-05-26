import MyArray from './myArray.js';
import Visual from './svgVisual.js';

const ARRAY_LENGTH = 100;

const $outerContainer = document.querySelector('.container');

const $shuffleBtn = document.querySelector('#shuffle');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $mergeSortBtn = document.querySelector('#merge-sort');
const $insertionSortBtn = document.querySelector('#insertion-sort');
const $quickSortBtn = document.querySelector('#quick-sort');

const visual = new Visual($outerContainer, ARRAY_LENGTH);
const myArray = new MyArray(ARRAY_LENGTH);

visual.init();

$shuffleBtn.addEventListener('click', () => {
  myArray.shuffle();
  visual.render(myArray.ref);
});

$bubbleSortBtn.addEventListener('click', () => {
  myArray.bubbleSort(visual.render.bind(visual));
});

$mergeSortBtn.addEventListener('click', () => {
  myArray.mergeSort(visual.render.bind(visual));
});

$insertionSortBtn.addEventListener('click', () => {
  myArray.insertionSort(visual.render.bind(visual));
});

$quickSortBtn.addEventListener('click', () => {
  myArray.quickSort(visual.render.bind(visual));
});
