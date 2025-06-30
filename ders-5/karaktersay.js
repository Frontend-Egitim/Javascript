let a = "asdlfknlaşqwesdm.af";

function letterCounter(str) {
  const letters = {};

  for (let i = 0; i < str.length; i++) {
    let harf = str[i]; // harf = "a"
    if (letters[harf]) {
      letters[harf] = letters[harf] + 1;
    } else {
      letters[harf] = 1;
    }
  }

  return letters;
}

console.log(letterCounter(a));
