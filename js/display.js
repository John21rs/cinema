var assentosSelecionados = 0;

function setDisplay(assento) {
  if (assento.classList.contains("ocupado")) {
    assento.classList.remove("ocupado");
    assento.style.backgroundColor = "green";
    var visor = document.getElementById("display");
    visor.value = visor.value.replace(assento.value + " ", "");
    assentosSelecionados--;

    document.getElementById("contadorAssentos").innerText =
      assentosSelecionados;
  } else {
    var visor = document.getElementById("display");
    visor.value += assento.value + " ";
    assento.classList.add("ocupado");
    assento.style.backgroundColor = "red";
    assentosSelecionados++;

    document.getElementById("contadorAssentos").innerText =
      assentosSelecionados;
    localStorage.setItem("assentos", assentosSelecionados);
  }
}

function limpar() {
  document.getElementById("display").value = "";
  assentosSelecionados = 0;
  document.getElementById("contadorAssentos").innerText = assentosSelecionados;
  localStorage.setItem("assentos", assentosSelecionados);
  var assentosOcupados = document.querySelectorAll(".assento.ocupado");

  assentosOcupados.forEach(function (assento) {
    assento.classList.remove("ocupado");
    assento.style.backgroundColor = "green";
  });
}

function toggleAssentoStatus(button) {
  button.classList.toggle("assento ocupado");
}
function gerarAssentos() {
  var assentosContainer = document.getElementById("assentosContainer");

  var letrasFileiras = ["A", "B", "C", "D", "E"];

  var numAssentosPorFileira = 8;

  letrasFileiras.forEach((letra) => {
    var row = document.createElement("div");
    row.classList.add("row");

    for (var i = 1; i <= numAssentosPorFileira; i++) {
      var assento = document.createElement("input");
      assento.type = "button";
      assento.value = letra + i;
      assento.classList.add("assento");
      assento.onclick = function () {
        setDisplay(this);
      };
      row.appendChild(assento);
    }

    assentosContainer.appendChild(row);
  });
}
gerarAssentos();
