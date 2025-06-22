let myArray = [5, 4, 3];

// myArray.length; // dizinin toplam eleman sayısı

// myArray[0]; // dizinin ilk elemanı

// console.log(myArray[myArray.length - 1]); // dizinin son elemanı

// SORU: arraydeki elemanları birbiriyl çarpan program
// myArray[0] * myArray[1] * myArray[2];

var sonuc = 1;

for (var i = 0; i < myArray.length; i++) {
  sonuc = sonuc * myArray[i];
}

console.log(sonuc);
