// let greeting = "Hello, world!";
// let name1 = "John Doe";

// var variable = `merhaba ${name1} name1`;
// var variable2 = `${12 + 50}`;

// // var let const

// let a = "bedirhan";
// a = "atakan";

// console.log(a);

// STRİNG METOTLARI

// length: metnin uzunluğunu bulmak için kullanılır
let isim = "Hamzaasdfsadfdsfdsafafds";
let isimUzulugu = isim.length;
// console.log(isimUzulugu);

console.log(isim.toLocaleLowerCase("tr-TR")); // her şeyi büyük veya küçük harfe çevirirken küçük ı gibi harfleri local bilgisin göre çevir
console.log(isim.toUpperCase()); // her şeyi büyük harfe çevir
console.log(isim.toLowerCase()); // her şeyi küçük harfe çevir

// index kavramı
console.log(isim.charAt(2));
console.log(isim.indexOf("mza"));

// slice
console.log(isim.slice(3));

// split
let cumle = "Ali ata bak";
console.log(cumle.split(" "));

// replace
console.log(cumle.replace("Ali", "Atakan"));
