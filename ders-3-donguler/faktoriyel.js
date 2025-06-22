let a = 10; // 4, 3, 2, 1

let sonuc = 1; // 5, 20, 60, 120

if (a >= 0) {
  while (a > 1) {
    sonuc = sonuc * a;
    a--;
  }
  console.log("foktoriyel: ", sonuc);
} else if (a < 0) {
  console.log("geçersiz sayı girdiniz");
}

// 1- sonuç değişkenini tanımla
// 2- a büyük mü 1'den
// 3- eğer a 1 den büyükse -> evet -> sonuc = sonuc * a && a--
//      hayır ->  sonucu yazdır
// 4-
