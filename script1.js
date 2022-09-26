const inputText = document.querySelector(".textoEncriptado");
const outputText = document.querySelector(".textoDesencriptado");
const copiar = document.querySelector(".botonCopiar");

function revelar() {
  copiar.style.display = "block";
  outputText.style.backgroundImage = "none";
}

//hay un error aca
function encriptarTexto() {
  const encriptado = encriptar(inputText.value);
  outputText.value = encriptado;
  inputText.value = "";
  revelar();
}

function desencriptarTexto() {
  const desencriptado = desencriptar(inputText.value);
  outputText.value = desencriptado;
  inputText.value = "";
  revelar();
}

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(texto) {
  let vocales = [["a","al"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];

  texto = texto.toLowerCase(); //pasar todo el texto a minusculas

  for(let i = 0; i < vocales.length; i++){
    if (texto.includes(vocales[i][0])){
       texto= texto.replaceAll(vocales[i][0],vocales[i][1]);
    }
  }
   return texto;
}

function desencriptar(texto) {
  let vocales = [["al","a"], ["enter","e"], ["imes","i"], ["ober","o"], ["ufat","u"]];

  texto = texto.toLowerCase(); //pasar todo el texto a minusculas

  for(let i = 0; i < vocales.length; i++){
    if (texto.includes(vocales[i][0])){
       texto= texto.replaceAll(vocales[i][0],vocales[i][1]);
    }
  }
   return texto;
}

function copiarContenido() {
  outputText.select()
  navigator.clipboard.writeText(outputText.value);
  outputText.value = "";
}









