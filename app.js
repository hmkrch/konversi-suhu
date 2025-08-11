const celciusValue = document.getElementById("celciusInpt");

const hasilBtn = document.getElementById("cekHasilBtn");

const tampilkanHasil = document.getElementById("tampilkanHasil");

const konversiSuhu = () => {
  const celcius = Number(celciusValue.value);

  return (celcius * 9) / 5 + 32;
};

// 2 versi

// hasilBtn.onclick = () => {
//   tampilkanHasil.textContent = konversiSuhu();
// };

// celciusValue.onkeyup = () => {
//   tampilkanHasil.textContent = konversiSuhu();
// };
