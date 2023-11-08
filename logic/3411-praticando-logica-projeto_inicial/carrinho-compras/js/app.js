// let produtoCar = {    
//     value,
//     preco
// }

const produtos = [];

function adicionar() {
   let produto = document.getElementById('produto').value
   let nomeProduto = produto.split('-')[0]
   let valorUnitario = produto.split('R$')[1]
   let qta = document.getElementById('quantidade')
   alert(nomeProduto)
   alert(valorUnitario)
   alert(qta.value)
   let preco = quantidade.value * valorUnitario
   alert(preco)
}

// document.querySelector(".botao-adicionar").addEventListener("click", function () {
//     //selecionando select de produtos
//     const produtosOpcoes = document.getElementById('produto');


//     const produtoSelecionado = produtosOpcoes.options[produtosOpcoes.selectedIndex].text;
//     const produtoValor = produtosOpcoes.options[produtosOpcoes.selectedIndex].getAttribute('preco');
//     const qta = produtosOpcoes.querySelector(".quantidade-input")
    
    
//     console.log(`O produto adicionado foi: ${produtoSelecionado}, e a quantidade foi: ${qta} e o preço foi: ${produtoValor}`);
//     let total 
// });
