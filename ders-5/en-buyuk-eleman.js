let arr = [1, 8, 76, 92, 100, 54, 5];

// arr.length = 6
// arr[3]
// var i = 0; i<=arr.length; i++

function findMax(array) {
  let max = 0; // 92

  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(findMax(arr));
