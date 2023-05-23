import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from "./index.js";
import listaValidada from './http-validacao.js';
import yargs from './yargs.cjs';


const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = ''){
    if (valida){
        console.log(
            chalk.yellow('Lista validada'), 
            chalk.black.bgGreen(identificador), 
           await listaValidada(resultado));
    } else {
        console.log(
            chalk.yellow('Lista de links'), 
            chalk.black.bgGreen(identificador), 
            resultado)
    }

    
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';    
    try
    {
        fs.lstatSync(caminho);
    } catch (erro){
        if(erro.code === 'ENOENT'){
            console.log('arquivo ou diretório não existe')
            return;
        }
    }


    if (fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach( async (nomeDeArquivo)=> { 
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }


}

processaTexto(caminho);