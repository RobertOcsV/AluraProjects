document.getElementById("qtd-pista").innerHTML = 100;
document.getElementById("qtd-superior").innerHTML = 200;
document.getElementById("qtd-inferior").innerHTML = 400;

function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso");
  let quantidadeIngressos = parseInt(document.getElementById("qtd").value);
  let ingressoSelect = document.getElementById(`qtd-${tipoIngresso.value}`);

  if (ingressoSelect.textContent >= 0) {
    alert("Compra realizada");
    ingressoSelect.innerHTML -= quantidadeIngressos;
    
  } else {
    alert(`Quantidade de ingressos indisponível para ${tipoIngresso.value}`);
  }
}
