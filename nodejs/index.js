import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'irmao, deu pau aí, não tem arquivo no diretório'))
}


function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) =>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    } )
}

pegaArquivo('./arquivos');
