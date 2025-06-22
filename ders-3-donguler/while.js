// let sayac = 1;

// while (sayac <= 5) {
//   console.log(sayac);
//   sayac += 1;
// }

// // continue; // devam et (döngünün başına geri dön)

// // break; // kır -> akıştan çıkıyor (döngü bitiyor)

sayac = 1;
toplam = 0;

while (sayac <= 20) {
  if (sayac === 10) {
    sayac++;
    continue;
  } else if (sayac % 2 === 0) {
    toplam = toplam + sayac;
    sayac++;
  }

  sayac++;
  continue;
}

console.log(toplam);
