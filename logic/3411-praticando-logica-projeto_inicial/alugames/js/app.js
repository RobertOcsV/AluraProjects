function alterarStatus(id, event) {
    event.preventDefault()  

  let GameClicado = document.getElementById(`game-${id}`);
  let imagem = GameClicado.querySelector(".dashboard__item__img");
  let botao = GameClicado.querySelector(".dashboard__item__button");

  if (botao.innerHTML === "Alugar") {
    botao.innerHTML = "Devolver";
    botao.classList.add("dashboard__item__button--return");
    imagem.classList.add("dashboard__item__img--rented");
  } else {
    botao.innerHTML = "Alugar";
    botao.classList.remove("dashboard__item__button--return");
    imagem.classList.remove("dashboard__item__img--rented");    
  }
}
