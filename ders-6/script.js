const gorevInput = document.getElementById("gorevInput");
const ekleBtn = document.getElementById("ekleBtn");
const gorevListesi = document.getElementById("gorevListesi");

ekleBtn.addEventListener("click", function () {
  const girilenGorev = gorevInput.value;

  if (girilenGorev != "") {
    console.log(girilenGorev);
  }
});
