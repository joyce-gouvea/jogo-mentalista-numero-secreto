var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 0;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas == 2 && chute != numeroSecreto) {
    elementoResultado.innerHTML =
      "O número de tentativas acabou. O número secreto era: " + numeroSecreto;
    return;
  }

  if (tentativas == 2 && chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você adivinhou!";
    return;
  }

  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
    return;
  }

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você adivinhou!";
  } else if (chute < numeroSecreto && chute <= 10 && chute >= 0) {
    elementoResultado.innerHTML = "Tente um número maior.";
  } else if (chute > numeroSecreto && chute <= 10 && chute >= 0) {
    elementoResultado.innerHTML = "Tente um número menor.";
  }
  tentativas++;
}