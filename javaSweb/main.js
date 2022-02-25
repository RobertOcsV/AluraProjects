function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;


    

//enquanto

for (  let contador = 0 ;  contador < listaDeTeclas.length; contador++) {

    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //utilizando template string avaixo \/
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = () => {
        tocaSom(idAudio);
    };
    //console.log(contador);
    
}