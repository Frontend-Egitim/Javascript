// let metin = "Merhaba Dünya!";

// let saat = 3;
// let metin1 = "Ali bugün okula ";
// let metin2 = " saat geç kaldı";

// let cumle = metin1 + saat.toString() + metin2;
// -----------------------------
// console.log(cumle);

// console.log(String.fromCharCode(65));

// // en sondaki karakterin indexini nasıl bulurum

// let metinUzunlugu = metin.length;

// let sonKarakterinIndexi = metin[0];

// console.log(metin[13]);

// console.log(metinUzunlugu);
// -----------------------------
// BOOLEAN

// const deger = true;

// let x = 20;
// let y = 20;
// let a = "20";

// let XYdenKucukMu = x < y; // true

// let esitMi = x == a;

// console.log(x);
// -----------------------------
// IF ELSE BLOKLARI

// if( herhangi bir koşul ) {
//    herhangi bir işlem
// }
// -----------------------------
// let x = 15;
// let y = 14;

// if (x > y) {
//   console.log("x, y'den büyüktür");
// } else if (x < y) {
//   console.log("x y den küçüktür");
// } else {
//   console.log("x y'ye eşittir");
// }

// -----------------------------

// VARSAYILAN BİR OKUL SİSTEMİ

// OGRENCİ BİLGİLERİ
// let ad = "Mükerrem";
// let okulNo = 123432;
// let okulDevamsizlikHakki = 30; // okulun max devamsızlık gün sayısı
// let devamsizGunSayisi = 10;
// let sinif = "2B";
// let sinavOrtalaması = 14.53; //100 üzerinden
// let sozluNotlariOrt = 85; //100 üzerinden

// let notOrt = (sinavOrtalaması + sozluNotlariOrt) / 2;
// let isNotlarYeterliMi = notOrt >= 50;

// if (!okulNo) {
//   if (devamsizGunSayisi < okulDevamsizlikHakki) {
//     if (isNotlarYeterliMi) {
//       console.log(
//         "İsmi " +
//           ad +
//           " olan, numarası " +
//           okulNo.toString() +
//           " olan öğrenci. Seneyi başarıyla tamamlamıştır"
//       );
//     }
//   }
// }

// let deger = 0;

// if (deger === 0) {
//   console.log("Deger true olarak değerlendirildi.");
// } else {
//   console.log("Deger false olarak değerlendirildi.");
// }

// let dizi = ["bedirhan", "atakan", "cemre", "hamza"];

// console.log(dizi[2][2]);

// let a = dizi[2];

// let b = "asdfad";

let meyveler = ["elma", "armut", "muz"];

meyveler.sort();

console.log(meyveler);

let sayilar = [3, 1, 2, 5, 4];
sayilar.sort();

console.log(sayilar);
