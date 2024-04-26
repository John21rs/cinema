window.onload = function () {
  document.getElementById("Assento").textContent =
    localStorage.getItem("assentos");

  var arraySalvo = JSON.parse(localStorage.getItem("filme_salvo"));
  document.getElementById("filme").textContent = arraySalvo[0].nome;
  document.getElementById("Horario").textContent = arraySalvo[0].horario;
  document.getElementById("Sala").textContent = arraySalvo[0].sala;
  document.getElementById("valor").textContent =
    localStorage.getItem("pagamento");
  var formaPagamento = localStorage.getItem("pagamento");

  if (formaPagamento === "pix") {
    document.getElementById("dados-cartao").style.display = "none";
    document.getElementById("dados-pix").style.display = "block";
  } else {
    document.getElementById("dados-pix").style.display = "none";
    document.getElementById("dados-cartao").style.display = "block";
  }
};

function confirmarPagamento() {
  alert("Compra realizada com sucesso!");
  sessionStorage.clear();
}
