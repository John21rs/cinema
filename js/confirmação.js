function gerarHorariosESalas() {
  const salas = ["Sala 1", "Sala 2", "Sala 3"];
  const horarios = ["10:00", "13:30", "16:45", "19:00", "21:15"];

  const salaAleatoria = salas[Math.floor(Math.random() * salas.length)];
  const horarioAleatorio =
    horarios[Math.floor(Math.random() * horarios.length)];

  return { sala: salaAleatoria, horario: horarioAleatorio };
}

var array = [];

function confirmar(filme) {
  fetch("../jsons/filmes.json")
    .then((response) => response.json())
    .then((data) => {
      var filmeEncontrado = data.find((f) => f.Title === filme);
      if (filmeEncontrado) {
        const { sala, horario } = gerarHorariosESalas();
        var informacoes_filme = `Nome: ${filmeEncontrado.Title}\nGênero: ${filmeEncontrado.Genre}\nDuração: ${filmeEncontrado.Runtime}\nAno: ${filmeEncontrado.Year}\nSinopse: ${filmeEncontrado.Plot}\nHorário: ${horario}\nSala: ${sala}`;
        var resposta = prompt(
          `${informacoes_filme} \n\nDeseja confirmar a locação do filme? (Sim/Não)`
        );
        if (resposta && resposta.toUpperCase() === "SIM") {
          alert("Filme locado com sucesso!");
          array.push({
            nome: filmeEncontrado.Title,
            horario: horario,
            sala: sala,
          });
          localStorage.setItem("filme_salvo", JSON.stringify(array));
          window.location.href = "./assentos.html";
        } else {
          alert("Locação cancelada!");
        }
      } else {
        alert("Filme não encontrado!");
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao carregar o arquivo JSON:", error);
    });
}

function carregarFilmes() {
  fetch("../jsons/filmes.json")
    .then((response) => response.json())
    .then((data) => {
      const filmesContainer = document.getElementById("filmes-container");

      data.slice(0, 12).forEach((filme) => {
        const divFilme = document.createElement("div");
        divFilme.classList.add("filmes");

        const img = document.createElement("img");
        img.src = filme.Poster;
        img.alt = filme.Title;

        const nome = document.createElement("p");
        nome.classList.add("nome");
        nome.textContent = filme.Title;

        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("botao");
        link.textContent = "Selecionar";
        link.onclick = () => confirmar(filme.Title);

        divFilme.appendChild(img);
        divFilme.appendChild(nome);
        divFilme.appendChild(link);

        filmesContainer.appendChild(divFilme);
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao carregar o arquivo JSON:", error);
    });
}
carregarFilmes();
