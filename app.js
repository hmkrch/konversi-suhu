const celciusValue = document.getElementById("celciusInpt");
const fahrenheitValue = document.getElementById("fahrenheitInpt");

const hasilBtn = document.getElementById("cekHasilBtn");

const tampilkanHasil = document.getElementById("tampilkanHasil");

const pilihSuhu = document.getElementById("pilihSuhu");

const kolomSuhuF = document.getElementById("kolomF");
const kolomSuhuC = document.getElementById("kolomC");

pilihSuhu.onchange = () => {
  if (pilihSuhu.value === "fahrenheit") {
    kolomSuhuF.classList.remove("hide");
    kolomSuhuC.classList.add("hide");
  } else {
    kolomSuhuF.classList.add("hide");
    kolomSuhuC.classList.remove("hide");
  }
};

// Function

const konversiSuhuCelcius = () => {
  const c = Number(celciusValue.value);

  return (c * 9) / 5 + 32;
};

const konversiSuhuFahrenheit = () => {
  const f = Number(fahrenheitValue.value);
  const hasil = ((f - 32) * 5) / 9;

  return hasil;
};

// console.log(konversiSuhuFahrenheit());

// 2 versi

hasilBtn.onclick = () => {
  if (!kolomSuhuC.classList.contains("hide")) {
    tampilkanHasil.textContent = konversiSuhuCelcius();
  } else {
    tampilkanHasil.textContent = konversiSuhuFahrenheit();
  }
};

// versi tanpa button

// celciusValue.onkeyup = () => {
//   tampilkanHasil.textContent = konversiSuhu();
// };
