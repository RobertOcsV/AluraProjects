export interface Promocao {
    id: number
    destino: string
    imagem: string
    preco: number
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface Depoimento {
    id: number;
    texto: string;
    autor: string;
    avatar: string;
}

export interface PessoaUsuaria {
  nome: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  cidade: string;
  estado: UnidadeFederativa;
  genero: string;
}

export interface Resultado {
  paginaAtual: number,
  ultimaPagina: number,
  total: number,
  precoMin: number,
  precoMax: number,
  resultado: Passagem[]
}

//Código omitido

export interface Passagem{
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: UnidadeFederativa;
  destino: UnidadeFederativa;
  companhia: Companhia;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: Orcamento[];


}

export interface Companhia{
  id: string;
  nome: string;
}

export interface Orcamento{
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number
}
