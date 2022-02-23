function tocaSom(idElementoAudio){

    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;


    let contador = 0;

//enquanto

while ( contador < listaDeTeclas.length) {

    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //utilizando template string avaixo \/
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    
    tecla.onclick = () => {

        tocaSom(idAudio);
    };

    contador = contador + 1;

    
    //console.log(contador);
    
}