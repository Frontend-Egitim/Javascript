function hesapla(x, y, islem) {
  switch (islem) {
    case "topla":
      return x + y;
    case "cikar":
      return x - y;
    case "bol":
      if (y == 0) {
        console.log("Sıfıra bölünme hatası");
        break;
      }
      return x / y;
    case "carp":
      return x * y;
    default:
      console.log("Yanlış bi işlem girdiniz");
  }
}

let e = hesapla(10, 50, "carp");
