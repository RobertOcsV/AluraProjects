function tocaSom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio'){
               elemento.play(); 
        }else{
            console.log('elemento não encontrado ou Seletor inválido');

        }
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



        tecla.onkeydown = function(evento){

            

            if (evento.code === 'Space' || evento.code === 'Enter' ) {
                tecla.classList.add('ativa');
            }
            
           

        }

        tecla.onkeyup = function(){

            tecla.classList.remove('ativa')
        }
}

