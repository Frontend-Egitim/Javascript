// fonksiyona gönderilen sayı dizisinin elemanları için:
//      eğer 3 e bölünüyorsa fizz
//      eğer 5 e bölünüyorsa buzz
//      hem 3 hem de 5 e bölünüyorsa fizzbuzz yazdırılsın.
//      3 ve 5 e bölünmüyorsa sayının kendisi yazdırılsın

let arr = [1, 8, 76, 92, 100, 15, 54, 5, 45];

function fizzbuzz(arr) {
  let a = 0;
  while (a < arr.length) {
    if (arr[a] % 15 == 0) console.log("fizzbuzz");
    else if (arr[a] % 3 == 0) console.log("fizz");
    else if (arr[a] % 5 == 0) console.log("buzz");
    else console.log(arr[a]);
    a++;
  }
}

fizzbuzz(arr);
