let a = 4;

let sonuc = 1;

if (a >= 0) {
  while (a > 1) {
    sonuc = sonuc * a;
    a--;
  }
  console.log("foktoriyel: ", sonuc);
} else if (a < 0) {
  console.log("geçersiz sayı girdiniz");
}
