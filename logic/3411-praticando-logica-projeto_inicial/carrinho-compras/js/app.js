const produtosCarrinho = [];

function adicionar() {
  let produtoSelecionado = document.getElementById("produto").value;
  let nomeProduto = produtoSelecionado.split("-")[0];
  let valorUnitario = parseFloat(produtoSelecionado.split("R$")[1]);
  let quantidade = parseInt(document.getElementById("quantidade").value);

  if (quantidade > 0) {
    const produtoExistente = produtosCarrinho.find(
      (produto) => produto.nome === nomeProduto
    );
    if (produtoExistente) {
      produtoExistente.quantidade += quantidade;
    } else {
      const novoProduto = {
        nome: nomeProduto,
        valorUnitario: valorUnitario,
        quantidade: quantidade,
      };
      produtosCarrinho.push(novoProduto);
    }

    document.getElementById("quantidade").value = "";

    atualizarCarrinho();
  } else {
    alert("Selecione a quantidade do produto");
  }
}

function atualizarCarrinho() {
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = "";

  for (const produto of produtosCarrinho) {
    let preco = produto.quantidade * produto.valorUnitario;
    carrinho.innerHTML += `
      <section class="carrinho__produtos__produto">
        <span class="texto-azul">x${produto.quantidade}</span> ${produto.nome} <span class="texto-azul">R$${preco}</span>
      </section>`;
  }

  atualizarValorTotal();
}

function atualizarValorTotal() {
  let total = 0;
  for (const produto of produtosCarrinho) {
    total += produto.quantidade * produto.valorUnitario;
  }

  document.getElementById("valor-total").textContent = `R$${total.toFixed(2)}`;
}

function limpar() {
  produtosCarrinho.length = 0;

  atualizarCarrinho();
  atualizarValorTotal();
}
