let arr = [1, 8, 76, 92, 100, 54, 5];
let arr2 = [2, 2, 3, 4, 65, 76, 78];

function sumAll(array) {
  let toplam = 0;
  for (var i = 0; i < array.length; i++) {
    toplam += array[i];
  }

  return toplam;
}

console.log(sumAll(arr));
