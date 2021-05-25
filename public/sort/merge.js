async function mergeSort(sourceArr) {
  function merge(left, right) {
    const arr = [];
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays
      if (Number(left[0].value) < Number(right[0].value)) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right];
  }

  function sort(array) {
    const half = array.length / 2;

    // Base case or terminating case
    if (array.length < 2) {
      return array;
    }

    const left = array.splice(0, half);
    return merge(sort(left), sort(array));
  }

  sort(sourceArr);
}

export default mergeSort;