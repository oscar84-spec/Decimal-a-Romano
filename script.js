const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const salida = document.getElementById("output");
const text = {
  Nan: "Please enter a valid number",
  negative: "Please enter a number greater than or equal to 1",
  greater: "Please enter a number less than or equal to 3999",
  claseOutput: "output",
};
/* const roman = (numero) => {
  

  if (numero === 0) {
    return "";
  }

  for (let i = 0; i <= romanos.length; i++) {
    if (numero >= romanos[i].valor) {
      return romanos[i].simbolo + roman(numero - romanos[i].valor);
    } else {
      console.log("false", romanos[i].simbolo);
    }
  }
};

let numero = 3;
console.log(roman(numero)); */

const numeroRomano = (numero) => {
  console.log("numeor romano", numero);
  const romanos = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" },
  ];
  if (numero === 0) {
    return "";
  }
  for (let i = 0; i <= romanos.length; i++) {
    if (numero >= romanos[i].valor) {
      return romanos[i].simbolo + numeroRomano(numero - romanos[i].valor);
    }
  }
};

const inputValid = () => {
  const inputInt = parseInt(inputNumber.value);
  if (!inputInt) {
    salida.classList.add(text.claseOutput);
    const mostrarError = `<p class="error">${text.Nan}</p>`;
    salida.innerHTML = mostrarError;
  } else if (inputInt < 0) {
    salida.classList.add(text.claseOutput);
    mostrarError = `<p class="error">${text.negative}</p>`;
    salida.innerHTML = mostrarError;
  } else if (inputInt >= 4000) {
    salida.classList.add(text.claseOutput);
    mostrarError = `<p class="error">${text.greater}</p>`;
    salida.innerHTML = mostrarError;
  } else {
    mostrarRomano(inputInt);
  }
};

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    inputValid();
  }
});

convertBtn.addEventListener("click", inputValid);

const mostrarRomano = (numero) => {
  salida.classList.add(text.claseOutput);
  salida.innerHTML = `<p class="resp">${numeroRomano(numero)}</p>`;
  console.log(numeroRomano(numero));
};
