// while (koşul) {işlemler}

// for( <sayaç tanımı>  ;  <koşul>   ; <artma miktarı>  ) {
//     işlemler (tekrar eden işlemler)
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

let n = 5; // faktoriyeli alınacak sayı
let sonuc = 1;

for (let i = 1; i <= n; i++) {
  sonuc *= i;
}

console.log(sonuc);
