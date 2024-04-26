function confirmar(descricao) {
  fetch("../jsons/imagens.json")
    .then((response) => response.json())
    .then((data) => {
      var ProdutoEncontrado = data.find((f) => f.descricao === descricao);
      if (ProdutoEncontrado) {
        var informacoes = `Descrição: ${ProdutoEncontrado.descricao}\nPreço: ${ProdutoEncontrado.value}`;
        var resposta = prompt(
          `${informacoes} \n\nDeseja confirmar a compra? (Sim/Não)`
        );
        if (resposta && resposta.toUpperCase() === "SIM") {
          alert("Compra feita com sucesso!");
          var array = [];
          array.push({
            Produto: ProdutoEncontrado.descricao,
            valor: ProdutoEncontrado.value,
          });
          localStorage.setItem("produto_salvo", JSON.stringify(array));
          window.location.href = "Pagamento.html";
        } else {
          alert("Produto cancelada!");
        }
      } else {
        alert("Produto não encontrado!");
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao carregar o arquivo JSON:", error);
    });
}

function carregarAperitivos() {
  fetch("../jsons/imagens.json")
    .then((response) => response.json())
    .then((data) => {
      const AperitivosContainer = document.getElementById(
        "aperitivos-container"
      );

      data.forEach((aperitivo) => {
        const divAperitivos = document.createElement("div");
        divAperitivos.classList.add("card");

        const img = document.createElement("img");
        img.src = aperitivo.link;
        img.alt = aperitivo.descricao;

        const nome = document.createElement("p");
        nome.classList.add("nome");
        nome.textContent = aperitivo.descricao;

        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("botao");
        link.textContent = "Selecionar";
        link.onclick = () => confirmar(aperitivo.descricao);

        divAperitivos.appendChild(img);
        divAperitivos.appendChild(nome);
        divAperitivos.appendChild(link);

        AperitivosContainer.appendChild(divAperitivos);
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao carregar o arquivo JSON:", error);
    });
}

carregarAperitivos();
