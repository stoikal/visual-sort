import { getRandomInt } from './common.js';

const ARRAY_LENGTH = 100;
const MAX_VALUE = 50;


const $arrayContainer = document.createElement('array-container');
$arrayContainer.length = ARRAY_LENGTH;

const itemRefs = [];

for (let i = 0; i < ARRAY_LENGTH; i++) {
  const $newArrayItem = document.createElement('array-item');
  // $newArrayItem.position = i + 1;
  $newArrayItem.maxValue = MAX_VALUE;
  $newArrayItem.value = getRandomInt(MAX_VALUE);

  itemRefs.push($newArrayItem);

  $arrayContainer.append($newArrayItem);
}

export default {
  element: $arrayContainer,
  itemRefs
}