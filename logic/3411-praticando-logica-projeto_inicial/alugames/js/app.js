function alterarStatus(id) {
    
   let GameClicado = document.getElementById(`game-${id}`);
   
   let imagem = GameClicado.querySelector('.dashboard__item__img');
   imagem.classList.add("dashboard__item__img--rented");

   let botao = GameClicado.querySelector('.dashboard__item__button');

   botao.innerHTML = "Devolver";
}
