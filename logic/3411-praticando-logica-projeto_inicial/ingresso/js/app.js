document.getElementById("qtd-pista").innerHTML = 100;
document.getElementById("qtd-superior").innerHTML = 200;
document.getElementById("qtd-inferior").innerHTML = 400;

function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso");
  let quantidadeIngressos = parseInt(document.getElementById("qtd").value);
  let ingressoSelect = document.getElementById(`qtd-${tipoIngresso.value}`);

  
  if (parseInt(ingressoSelect.textContent) < quantidadeIngressos) {
    alert(`Quantidade de ingressos indisponível para ${tipoIngresso.value}`);
  }    
   else {
    alert("Compra realizada");
  
  ingressoSelect.innerHTML = parseInt(ingressoSelect.innerHTML) - quantidadeIngressos; 
}
}