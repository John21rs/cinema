window.onload = function () {
  var arraySalvo = JSON.parse(localStorage.getItem("produto_salvo"));
  document.getElementById("valor").value =
    localStorage.getItem("assentos") * 20 + arraySalvo[0].valor;
};

function salvarpagamento(tipo) {
  localStorage.setItem("pagamento", tipo);
}
