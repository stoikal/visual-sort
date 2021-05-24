import './components/array-container.js'
import './components/array-item.js'

const ARRAY_LENGTH = 100;
const MAX_VALUE = 50;

const getRandomInt = (n) => Math.floor(Math.random() * n) + 1;
const delay = ms => new Promise(res => setTimeout(res, ms));

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


async function bubbleSort(arr){
  console.log('bubble sort start')
  const start = new Date()
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < ( arr.length - i -1 ); j++){
      const curr = arr[j];
      const next = arr[j+1];
      
      curr.color = 'blue'
      next.color = 'green'
      await delay(5)
      if(Number(curr.value) > Number(next.value)){
        const temp = curr.value
        curr.value = next.value
        next.value = temp
      }
      curr.color = 'red'
      next.color = 'red'
    }
  }
  console.log('bubble sort end', new Date().getTime() - start.getTime())
}

const $bubbleSortBtn = document.querySelector('#bubble-sort');
const $randomize = document.querySelector('#randomize');



$bubbleSortBtn.addEventListener('click', () => {
  bubbleSort(itemRefs);
  // const startTime = new Date().getTime();

  // (async () => {
  
  //   for (let i = 0; i < 10; i++) {
  //     await delay(500)
  //     console.log(i, new Date().getTime() - startTime)
  //   }
  // })()

  // console.log('click')
})

$randomize.addEventListener('click', () => {
  itemRefs.forEach((item) => {
    item.value = getRandomInt(MAX_VALUE)
  })
})
