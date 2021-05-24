import './components/array-container.js'
import './components/array-item.js'

const ARRAY_LENGTH = 100;
const MAX_VALUE = 50;

const getRandomInt = (n) => Math.floor(Math.random() * n) + 1;

const $outerContainer = document.querySelector('.container');
const $arrayContainer = document.createElement('array-container');
$arrayContainer.length = ARRAY_LENGTH;

const itemRefs = [];


for (let i = 0; i < ARRAY_LENGTH; i++) {
  const $newArrayItem = document.createElement('array-item');
  
  // $newArrayItem.position = i + 1;
  $newArrayItem.maxValue = MAX_VALUE;
  $newArrayItem.value = getRandomInt(MAX_VALUE);
  
  itemRefs.push($newArrayItem);
  
  $arrayContainer.append($newArrayItem)
}

$outerContainer.append($arrayContainer)


function bubbleSort(arr){
  console.log('bubble sort start')
  const start = new Date()
  for(let i = 0; i < arr.length; i++){
    // Last i elements are already in place  
    for(let j = 0; j < ( arr.length - i -1 ); j++){
      const curr = arr[j];
      const next = arr[j+1];
      
      // Checking if the item at present iteration 
      // is greater than the next iteration
      if(Number(curr.value) > Number(next.value)){
        setTimeout(() => {

        }, 10)
        // If the condition is true then swap them
          const temp = curr.value
          curr.value = next.value
          next.value = temp
        }
    }
  }
  console.log('bubble sort end', new Date().getTime() - start.getTime())
}

const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $randomize = document.querySelector('#randomize');

$bubbleSortBtn.addEventListener('click', () => {
  bubbleSort(itemRefs);
})

$randomize.addEventListener('click', () => {
  itemRefs.forEach((item) => {
    item.value = getRandomInt(MAX_VALUE)
  })
})