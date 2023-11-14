let qtdPistaElement = parseInt(
  document.getElementById("qtd-pista").textContent
);
let qtdSuperiorElement = parseInt(
  document.getElementById("qtd-superior").textContent
);
let qtdInferiorElement = parseInt(
  document.getElementById("qtd-inferior").textContent
);

function comprar() {

  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidadeIngressos = parseInt(document.getElementById("qtd").value);

  if (tipoIngresso === "inferior" ) {
    qtdInferiorElement -= quantidadeIngressos;    
    document.getElementById('qtd-inferior').textContent = qtdInferiorElement

  } else if (tipoIngresso === "superior") {
    qtdSuperiorElement -= quantidadeIngressos;   
    document.getElementById('qtd-superior').textContent = qtdSuperiorElement
  } else {
    qtdPistaElement -= quantidadeIngressos;    
    document.getElementById('qtd-pista').textContent = qtdPistaElement
  }


}

