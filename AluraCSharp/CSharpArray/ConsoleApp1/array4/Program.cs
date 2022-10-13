

//int[] valores = { 10, 58, 36, 47 };
//    for (int i = 0; i < valores.Length; i++) { // se colocar para o for rodar 5 vezes, irá exceder a quantidade de itens do array e irá apontar um erro comum.
//    Console.WriteLine(valores[i]);
//}



double MediaDaAmostra(double[] amostra)
{
    double media = 0;
    double acumulador = 0;

    if ((amostra == null) || (amostra.Length == 0))
    {
        Console.WriteLine("Amostra de dados nula ou vazia.");
        return 0;
    }
    else
    {
        for (int i = 0; i < amostra.Length; i++)
        {
            acumulador = acumulador + amostra[i];
        }
        media = acumulador / amostra.Length;
    }

    return media;
}

//Propriedade / Método  Descrição
//GetValue	retorna o conteúdo/valor de um elemento pelo índice.
//GetLength	retorna o números de elementos do array.
//Rank	retorna o número de dimensões de um array.
//CopyTo	cria uma cópia de todos os valores de um array.
//Sort	ordena os valores de um array de forma ascendente.
//Reverse	inverte a ordem de elementos de um array.
//Clone	cria uma cópia do array.
//Length	retorna o número de elementos de um array.
//IndexOf	encontra a primeira ocorrência de um elemento no array.
//LastIndexOf	encontra a última ocorrência de um elemento no array.
//Clear	limpa todas as posições de um array.
//Exists	verifica se existe ou não um elemento no array.


//A classe Array é a superclasse de onde todas as instâncias de array do C# herdam seus atributos e métodos. Dentre as características desta classe temos:

//Pode possuir uma ou mais dimensões.
//Tem um tamanho fixo.
//Suporta acesso por índices.
//Como vimos, podemos criar uma instância da classe usando a sintaxe mais simplificada 
//int[] valores = new int[10] ou usar o método CreateInstance por exemplo: Array pesquisa = Array.CreateInstance(typeof(double), 6);

//Para adicionar elementos ao vetor podemos usar o método SetValue 
//que recebe dois parâmetros: o elemento e o índice, onde o elemento será “setado”. Temos um exemplo: pesquisa.SetValue(9.1, 1);
//https://learn.microsoft.com/pt-br/dotnet/api/system.array?view=net-6.0