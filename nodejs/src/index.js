import fs from 'fs';
import chalk from 'chalk';

// const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'irmao, deu pau aí, não tem arquivo no diretório'))
}

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'não há links no arquivo';
}




async function pegaArquivo(caminhoDoArquivo){

    try{
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro);
    } 
}

pegaArquivo('./arquivos/texto.md'); 

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
//         if(erro){
//             trataErro(erro);
//         }
//         console.log(chalk.green(texto));
//     } )
// }


// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto)=>{console.log(chalk.green(texto))})
//         .catch(trataErro)
// }


// setInterval(() => pegaArquivo('./arquivos/'), 5000);






export default pegaArquivo;