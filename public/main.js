import './components/array-container.js'
import './components/array-item.js'

const ARRAY_LENGTH = 10;
const MAX_VALUE = 13;

const getRandomInt = (n) => Math.floor(Math.random() * n) + 1;

const $outerContainer = document.querySelector('.container');
const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $arrayContainer = document.createElement('array-container');
$arrayContainer.length = ARRAY_LENGTH;

const itemRefs = [];


for (let i = 0; i < ARRAY_LENGTH; i++) {
  const $newArrayItem = document.createElement('array-item');

  $newArrayItem.position = i + 1;
  $newArrayItem.maxValue = MAX_VALUE
  $newArrayItem.value = getRandomInt(MAX_VALUE);
  
  itemRefs.push($newArrayItem);

  $arrayContainer.append($newArrayItem)
}

$outerContainer.append($arrayContainer)


function bubbleSort(arr){
  console.log('bubble sort start')
  for(let i = 0; i < arr.length; i++){
      console.log(i)
    // Last i elements are already in place  
    for(let j = 0; j < ( arr.length - i -1 ); j++){
      const curr = arr[j];
      const next = arr[j+1];

      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(Number(curr.value) > Number(next.value)){
          
        // If the condition is true then swap them
        const temp = curr.position
        curr.position = next.position
        next.position = temp
      }
    }
  }
  console.log('bubble sort end')
 }

 $bubbleSortBtn.addEventListener('click', () => {
   bubbleSort(itemRefs);
 })